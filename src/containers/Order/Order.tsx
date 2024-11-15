import React, { useState } from 'react';
import { IOrderMutation } from '../../types';
import axiosAPI from '../../axiosAPI';
import Spinner from '../../components/UI/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearCart, selectCartDishes } from '../../store/cartSlice';

const initialStateToCustomer = {
  name: '',
  address: '',
  phone: ''
};

const Order = () => {
  const [customer, setCustomer] = useState(initialStateToCustomer);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const cart = useAppSelector(selectCartDishes);
  const dispatch = useAppDispatch();

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setCustomer(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const onFormSubmit = async (e: React.FormEvent)=> {
    e.preventDefault();

    const order = {
      customer: {...customer},
      dishes: {...cart},
    };

    try {
      setLoading(true);
      await axiosAPI.post<IOrderMutation>('orders.json', order);
      dispatch(clearCart());
      navigate('/');
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
    setCustomer(initialStateToCustomer);
  };

  let content = (
    <form onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Client name</label>
        <input
          id="name" type="text" name="name"
          value={customer.name}
          onChange={onChangeField}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          id="address" type="text" name="address"
          value={customer.address}
          onChange={onChangeField}
          className="form-control"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone" type="text" name="phone"
          value={customer.phone}
          onChange={onChangeField}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-dark">
        Place order
      </button>
    </form>
  );

  if (loading) {
    content = <Spinner />;
  }

  return (
    <div>
      <div className="row mt-2">
        <div className="col">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Order;