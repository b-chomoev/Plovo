import { DishCart } from '../../types';
import React, { useState } from 'react';
import Modal from '../UI/Modal/Modal.tsx';
import CartDishes from './CartDishes/CartDishes.tsx';
import { useNavigate } from 'react-router-dom';

interface Props {
  cart: DishCart[];
}

const Cart: React.FC<Props> = ({cart}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div>
      <Modal show={showModal} closeModal={() => setShowModal(false)} title="Order" defaultModalBtn={false}>
        <div className="modal-body">
          <p>Do you want to continue to checkout?</p>
        </div>
        <div className="text-end">
          <button className="btn btn-dark" onClick={() => navigate('/checkout')}>Continue</button>
        </div>
      </Modal>

      <h4>Cart</h4>
      <CartDishes cart={cart}/>
      {cart.length > 0 ?
        <div className="text-center">
          <button className="btn btn-dark" onClick={() => setShowModal(true)}>Order</button>
        </div> : null
      }
    </div>
  );
};

export default Cart;
