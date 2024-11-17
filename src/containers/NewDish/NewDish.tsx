import DishForm from '../../components/DishForm/DishForm';
import * as React from 'react';
import { ApiDish } from '../../types';
import axiosAPI from '../../axiosAPI';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCreateDishLoading } from '../../store/slices/dishesSlice';
import { createDish } from '../../store/thunks/dishesThunk';

const NewDish = () => {
  const [addLoading, setAddLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const createDishLoading = useAppSelector(selectCreateDishLoading);

  const addNewDish = async  (dish: ApiDish) => {
    await dispatch(createDish({...dish}));
    navigate('/');
    toast.success("Dish was added successfully");
  };

  return (
    <div className="mb-2">
        <DishForm addNewDish={addNewDish} isLoading={addLoading}/>
    </div>
  );
};

export default NewDish;