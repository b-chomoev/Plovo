import { useCallback, useEffect, useState } from 'react';
import { DishCart, DishesList, IDish } from './types';
import Home from './containers/Home/Home';
import NewDish from './containers/NewDish/NewDish';
import { Route, Routes, useLocation } from 'react-router-dom';
import CheckOut from './containers/CheckOut/CheckOut';
import Order from './containers/Order/Order';
import axiosAPI from './axiosAPI';
import EditDish from './containers/EditDish/EditDish';
import Orders from './containers/Orders/Orders';
import Layout from './components/Layout/Layout';

const App = () => {
  const [cart, setCart] = useState<DishCart[]>([]);
  const [dishes, setDishes] = useState<IDish[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();

  const fetchDishes = useCallback(async () => {
    try {
      setLoading(true);
      const responseDishes: {data: DishesList | null} = await axiosAPI('dishes.json');
      const dishesList = responseDishes.data;

      if (dishesList === null) {
        setDishes([]);
        return;
      }

      const dishes: DishesList = dishesList;

      const dishesInMyFormat = Object.keys(dishesList).map(dish => {
        return {
          ...dishes[dish],
          id: dish,
        };
      });

      setDishes(dishesInMyFormat);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchDishes();

    }
  }, [fetchDishes, location]);

  const updateCart = useCallback(() => {
    setCart(prevState => {
      return prevState.map((cartDish) => {
        const updateDish = dishes.find(dish => dish.id === cartDish.dish.id);

        if (updateDish) {
          return {
            ...cartDish,
            dish: updateDish,
          };
        }

        return cartDish;
      });
    });
  }, [dishes]);

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    void updateCart();
  }, [updateCart]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home dishes={dishes} cart={cart} isLoadingDishes={loading} fetchDishes={fetchDishes}/>}/>
          <Route path="/newDish" element={<NewDish />}/>
          <Route path="/editDish/:id" element={<EditDish />}/>
          <Route path="/checkout" element={<CheckOut cart={cart}/>}>
            <Route path="continue" element={<Order cart={cart} clearCart={clearCart} />} />
          </Route>
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<h1>Not found</h1>}/>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
