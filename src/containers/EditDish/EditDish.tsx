import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import axiosAPI from '../../axiosAPI';
import { ApiDish } from '../../types';
import DishForm from '../../components/DishForm/DishForm';

const EditDish = () => {
  const [dish, setDish] = useState<ApiDish | null>(null);
  const [editLoading, setEditLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  const getOneDishById = useCallback(async () => {
    const response: {data: ApiDish} = await axiosAPI(`dishes/${id}.json`);
    if (response.data) {
      setDish(response.data);
    }
  }, [id]);

  useEffect(() => {
    void getOneDishById();
  }, [getOneDishById]);

  const addNewDish = async  (dish: ApiDish) => {
    console.log(dish);
    try {
      setEditLoading(true);
      await axiosAPI.put(`dishes/${id}.json`, dish);
      navigate('/');
    } catch (e) {
      console.error(e);
    } finally {
      setEditLoading(false);
    }
  };

  return dish && (
    <>
      <DishForm addNewDish={addNewDish} existingDish={dish} isEdit={true} isLoading={editLoading}/>
    </>
  );
};

export default EditDish;