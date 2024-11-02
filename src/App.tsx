import { useCallback, useEffect, useState } from 'react';
import ToolBar from './components/ToolBar/ToolBar';
import { DishCart, DishesList, IDish } from './types';
import Home from './containers/Home/Home';
import NewDish from './containers/NewDish/NewDish';
import { Route, Routes, useLocation } from 'react-router-dom';
import CheckOut from './containers/CheckOut/CheckOut';
import Order from './containers/Order/Order';
import axiosAPI from './axiosAPI';

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
      if (dishesList === null) return;

      const dishes: DishesList = responseDishes.data;

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

  const addNewDish = (newDish: IDish) => {
    setDishes((prevState) => [...prevState, newDish]);
  };

  const addDishToCart = (dish: IDish) => {
    setCart(prevState => {
      const indexDish = prevState.findIndex(dishCart => dishCart.dish === dish);

      if (indexDish === -1) {
        return [...prevState, {dish, amount: 1}];
      } else {
        const cartCopy = [...prevState];
        const copyDishCart = {...cartCopy[indexDish]};
        copyDishCart.amount++;
        cartCopy[indexDish] = copyDishCart;

        return [...cartCopy];
      }
    });
  };

  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container mt-4">
        <div className="row">
          <Routes>
            <Route path="/" element={<Home dishes={dishes} AddDishToCart={addDishToCart} cart={cart}/>}/>
            <Route path="/newDish" element={<NewDish addNewDish={addNewDish}/>}/>
            <Route path="/checkout" element={<CheckOut cart={cart}/>}>
              <Route path="continue" element={<Order cart={cart}/>} />
            </Route>
            <Route path="*" element={<h1>Not found</h1>}/>
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
