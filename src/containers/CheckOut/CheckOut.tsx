import { DishCart } from '../../types';
import React, { useEffect } from 'react';
import CartDishes from '../../components/Cart/CartDishes/CartDishes.tsx';
import { Link, Outlet, useNavigate } from 'react-router-dom';

interface Props {
  cart: DishCart[];
}

const CheckOut: React.FC<Props> = ({cart}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [cart.length, navigate]);

  return (
    <>
      <CartDishes cart={cart}/>
      <div>
        <Link to={'/'} className='btn btn-danger'>Cancel</Link>
        <Link to={'/checkout/continue'} className='btn btn-dark'>Continue</Link>
      </div>
      <Outlet/>
    </>
  );
};

export default CheckOut;