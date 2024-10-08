import { useState } from 'react';
import ToolBar from './components/ToolBar/ToolBar.tsx';
import DishForm from './components/DishForm/DishForm.tsx';
import Dishes from './components/Dishes/Dishes.tsx';
import Cart from './components/Cart/Cart.tsx';
import { DishCart, IDish } from './types';
import Modal from './components/UI/Modal/Modal.tsx';

const App = () => {
  const [cart, setCart] = useState<DishCart[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [dishes, setDishes] = useState<IDish[]>([
    {
      id: "1",
      name: "Pasta",
      description: "Italian",
      price: 30,
      urlImage:
        "https://images.stockcake.com/public/a/a/f/aafc7cba-e1d8-42c7-8e9b-c302a0ecdd29_medium/italian-pasta-dinner-stockcake.jpg",
    },
    {
      id: "2",
      name: "Pizza",
      description: "French",
      price: 22,
      urlImage:
        "https://i.pinimg.com/736x/e7/4e/6c/e74e6ca1c558f9b539d1094480623a5a.jpg",
    },
    {
      id: "3",
      name: "Burger",
      description: "American",
      price: 18,
      urlImage:
        "https://images.stockcake.com/public/0/7/b/07bf10f9-4c26-417a-8eea-65598e4cf063_medium/juicy-cheeseburger-delight-stockcake.jpg",
    },
  ]);

  const addNewDish = (newDish: IDish) => {
    setDishes((prevState) => [...prevState, newDish]);
  };

  const addDishToCart = (dish: IDish) => {
    setCart(prevState => {
      const indexDish = prevState.findIndex(dishCart => dishCart.dish === dish);

      if (indexDish === -1) {
        return [...prevState, {dish, amount: 1}]
      } else {
        const cartCopy = [...prevState];
        const copyDishCart = {...cartCopy[indexDish]}
        copyDishCart.amount++;
        cartCopy[indexDish] = copyDishCart;

        return [...cartCopy];
      }
    })
  }

  const closeModalWindow = () => {
    setShowModal(!showModal);
    console.log('Clicked');
  }

  return (
    <>
      <Modal show={showModal} title='Your order' closeModal={closeModalWindow}></Modal>
      <header>
        <ToolBar />
      </header>
      <main className="container mt-4">
        <div className="row">
          <div className="col-4 mb-2">
            <DishForm addNewDish={addNewDish} />
          </div>
          <div className="col-4 mb-2">
            <Dishes dishes={dishes} addToCart={addDishToCart} />
          </div>
          <div className="col-4 mb-2">
            <Cart cart={cart} />
            <button className='btn btn-dark' onClick={() => setShowModal(!showModal)}>Order</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
