import { useCallback, useEffect, useState } from 'react';
import Home from './containers/Home/Home';
import NewDish from './containers/NewDish/NewDish';
import { Route, Routes, useLocation } from 'react-router-dom';
import CheckOut from './containers/CheckOut/CheckOut';
import Order from './containers/Order/Order';
import EditDish from './containers/EditDish/EditDish';
import Orders from './containers/Orders/Orders';
import Layout from './components/Layout/Layout';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { updateCart } from './store/slices/cartSlice';
import { fetchAllDishes } from './store/thunks/dishesThunk';
import { selectDishes } from './store/slices/dishesSlice';

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();
  const dishes = useAppSelector(selectDishes);
  const dispatch = useAppDispatch();

  const fetchDishes = useCallback(async () => {
    await dispatch(fetchAllDishes());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchDishes();
    }
  }, [fetchDishes, location]);

  useEffect(() => {
    dispatch(updateCart(dishes));
  }, [dishes, dispatch]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home dishes={dishes} isLoadingDishes={loading} fetchDishes={fetchDishes}/>}/>
          <Route path="/newDish" element={<NewDish />}/>
          <Route path="/editDish/:id" element={<EditDish />}/>
          <Route path="/checkout" element={<CheckOut />}>
            <Route path="continue" element={<Order />} />
          </Route>
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<h1>Not found</h1>}/>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
