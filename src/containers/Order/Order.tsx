import React, { useState } from 'react';
import { DishCart, IOrderMutation } from '../../types';
import axiosAPI from '../../axiosAPI.ts';

interface Props {
  cart: DishCart[];
}

const initialStateToCustomer = {
  name: '',
  address: '',
  phone: ''
};

const Order: React.FC<Props> = ({cart}) => {
  const [customer, setCustomer] = useState(initialStateToCustomer);

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

    await axiosAPI.post<IOrderMutation>('orders.json', order);

    console.log(order);
    setCustomer(initialStateToCustomer);
  };

  return (
    <div>
      <div className="row mt-2">
        <div className="col">
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
        </div>

      </div>
    </div>
  );
};

export default Order;