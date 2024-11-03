import DishForm from '../../components/DishForm/DishForm';
import * as React from 'react';
import { ApiDish } from '../../types';
import axiosAPI from '../../axiosAPI';
import { useNavigate } from 'react-router-dom';

const NewDish = () => {
  const [addLoading, setAddLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const addNewDish = async  (dish: ApiDish) => {
    try {
      setAddLoading(true);
      await axiosAPI.post('dishes.json', dish);
      navigate('/');
    } catch (e) {
      console.error(e);
    } finally {
      setAddLoading(false);
    }
  };

  return (
    <div className="mb-2">
        <DishForm addNewDish={addNewDish} isLoading={addLoading}/>
    </div>
  );
};

export default NewDish;