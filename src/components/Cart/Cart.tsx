import Modal from '../UI/Modal/Modal';
import CartDishes from './CartDishes/CartDishes';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectCartDishes } from '../../store/cartSlice';
import { useState } from 'react';

const Cart= () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const cartDishes = useAppSelector(selectCartDishes);

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
      <CartDishes cart={cartDishes}/>
      {cartDishes.length > 0 ?
        <div className="text-center">
          <button className="btn btn-dark" onClick={() => setShowModal(true)}>Order</button>
        </div> : null
      }
    </div>
  );
};

export default Cart;
