import Dishes from '../../components/Dishes/Dishes.tsx';
import Cart from '../../components/Cart/Cart.tsx';
import { DishCart, IDish } from '../../types';
import React from 'react';

interface Props {
  dishes: IDish[];
  addDishToCart: (dish: IDish) => void;
  cart: DishCart[];
}

const Home: React.FC<Props> = ({dishes, addDishToCart, cart}) => {
  return (
    <>
      <div className="col-4 mb-2">
        <Dishes dishes={dishes} addToCart={addDishToCart}/>
      </div>
      <div className="col-4 mb-2">
        <Cart cart={cart}/>
        {/*<button className='btn btn-dark' onClick={() => setShowModal(!showModal)}>Order</button>*/}
      </div>
    </>
  );
};

export default Home;