import { DishCart } from '../../types';
import React from 'react';

interface Props {
  cartDish: DishCart;
}

const CartItem: React.FC<Props> = ({cartDish}) => {
  return (
    <div className='card mb-3 p-2'>
      <div className='row align-items-center justify-content-between'>
        <div className='col-4'>{cartDish.dish.name}</div>
        <div className='col-4'>{cartDish.amount}</div>
        <div className='col-4'>{cartDish.dish.price}$</div>
      </div>
    </div>
  );
};

export default CartItem;