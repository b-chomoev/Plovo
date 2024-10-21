import { DishCart } from '../../types';
import React, { useState } from 'react';
import Modal from '../UI/Modal/Modal.tsx';
import CartDishes from './CartDishes/CartDishes.tsx';
import { useNavigate } from 'react-router-dom';

interface Props {
  cart: DishCart[];
}

const Cart: React.FC<Props> = ({cart}) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Modal show={showModal} title='Your order' closeModal={() => setShowModal(false)}>
        Confirm your order, please!
        <div>
          <button className='btn btn-dark' onClick={() => navigate('/checkout')}>Continue</button>
        </div>
      </Modal>

      <h4>Cart</h4>
      <CartDishes cart={cart}/>
      <button className='btn btn-dark' onClick={() => setShowModal(true)}>Order</button>
    </div>
  );
};

export default Cart;
