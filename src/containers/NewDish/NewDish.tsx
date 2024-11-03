import DishForm from '../../components/DishForm/DishForm';
import * as React from 'react';
import { ApiDish } from '../../types';
import axiosAPI from '../../axiosAPI';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/UI/Spinner/Spinner';

const NewDish = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const addNewDish = async  (dish: ApiDish) => {
    try {
      setLoading(true);
      await axiosAPI.post('dishes.json', dish);
      navigate('/');
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-2">
      {loading ? <Spinner /> :
        <DishForm addNewDish={addNewDish}/>
      }
    </div>
  );
};

export default NewDish;