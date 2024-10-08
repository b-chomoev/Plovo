import CartItem from './CartItem.tsx';
import { DishCart } from '../../types';
import React from 'react';

interface Props {
  cart: DishCart[];
}

const Cart: React.FC<Props> = ({cart}) => {
  return (
    <div>
      <h4>Cart</h4>

      <div className='row'>
        {cart.map(cartDish => (
          <CartItem key={cartDish.dish.id} cartDish={cartDish}/>
        ))}
      </div>

      <div className='row align-items-center justify-content-between'>
        <div className='text-start col-4 p-0'><p><strong>Total: </strong></p></div>
        <div className='text-end col-4 p-0'><p>50$</p></div>
      </div>
    </div>
  );
};

export default Cart;
