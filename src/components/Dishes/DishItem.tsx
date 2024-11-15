import React from "react";
import { IDish } from '../../types';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { addDish } from '../../store/cartSlice';

interface Props {
  dish: IDish;
  onDeleteDish: React.MouseEventHandler;
}

const DishItem: React.FC<Props> = ({ dish, onDeleteDish }) => {
  const imageUrl = "https://static.vecteezy.com/system/resources/previews/007/415/858/non_2x/holding-signboard-404-not-found-cute-pear-cartoon-vector.jpg";

  const imageStyle = {
    background: `url(${dish.urlImage || imageUrl}) center center / cover no-repeat`,
  };

  const dispatch = useAppDispatch();

  return (
    <div className="card mb-3 p-4">
      <div className="row justify-content-between">
        <div className="col-5" style={imageStyle} />

        <div className="col-6">
          <h5 className="cart-title">{dish.name}</h5>
          <p className="card-text">{dish.description}</p>
          <p className="card-text">Price: {dish.price}$</p>
        </div>
        <div className='row justify-content-between row-cols-2'>
          <button className='btn btn-dark' onClick={() => dispatch(addDish(dish))}>Add to Cart</button>
          <button className='btn btn-danger' onClick={onDeleteDish}>Delete</button>
          <NavLink to={`/editDish/${dish.id}`} className='btn btn-success'>Edit</NavLink>
        </div>
      </div>
    </div>
  );
};

export default DishItem;
