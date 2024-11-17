import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import axiosAPI from '../../axiosAPI';
import { ApiDish } from '../../types';
import DishForm from '../../components/DishForm/DishForm';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectFetchDishesLoading, selectOneDish } from '../../store/slices/dishesSlice';
import { getOneDishById } from '../../store/thunks/dishesThunk';

const EditDish = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const dish = useAppSelector(selectOneDish);
  const editLoading = useAppSelector(selectFetchDishesLoading);

  const getDishById = useCallback(async () => {
    if (id) {
      dispatch(getOneDishById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    void getDishById();
  }, [getDishById]);

  const editDish = async  (dish: ApiDish) => {
    console.log(dish);
    try {
      await axiosAPI.put(`dishes/${id}.json`, dish);
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  return dish && (
    <>
      <DishForm addNewDish={editDish} existingDish={dish} isEdit={true} isLoading={editLoading}/>
    </>
  );
};

export default EditDish;