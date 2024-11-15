import CartDishes from '../../components/Cart/CartDishes/CartDishes';
import { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectCartDishes } from '../../store/cartSlice';

const Checkout = () => {
  const navigate = useNavigate();
  const cart = useAppSelector(selectCartDishes);

  useEffect(() => {
    if(cart.length === 0) navigate('/');
  }, [cart.length, navigate]);

  return (
    <>
      <h4>Checkout</h4>

      <CartDishes cart={cart}/>

      <div className="d-flex gap-2">
        <Link className="btn btn-danger" to="/">Cancel</Link>
        <Link className="btn btn-dark" to="continue">Continue</Link>
      </div>
      <Outlet/>
    </>
  );
};

export default Checkout;