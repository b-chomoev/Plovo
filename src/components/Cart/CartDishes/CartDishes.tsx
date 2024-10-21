import React from 'react';
import CartItem from '../CartItem.tsx';
import { DishCart } from '../../../types';

interface Props {
  cart: DishCart[];
}

const CartDishes: React.FC<Props> = ({cart}) => {
  const total = cart.reduce((acc, cartDish) => {
    acc = acc + cartDish.dish.price * cartDish.amount;

    return acc;
  }, 0);

  let cartList = (
    <>
      <h6 className="text-center my-4">Oooopsss... there is no dish in your order!</h6>
    </>
  );

  if (cart.length > 0) {
    cartList = (
      <div>
        {cart.map(cartDish => (
          <CartItem key={cartDish.dish.id} cartDish={cartDish}/>
        ))}
        <div className="row align-items-center justify-content-between">
          <div className="text-start col-4 p-0"><p><strong>Total: </strong></p></div>
          <div className="text-end col-4 p-0"><p>{total}$</p></div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {cartList}
    </div>
  );
};

export default CartDishes;