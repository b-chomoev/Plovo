import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { ApiDish } from '../../types';
import DishForm from '../../components/DishForm/DishForm';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectEditDishLoading,
  selectOneDish,
  selectOneFetchDishLoading
} from '../../store/slices/dishesSlice';
import { editDish, getOneDishById } from '../../store/thunks/dishesThunk';
import { toast } from 'react-toastify';
import Spinner from '../../components/UI/Spinner/Spinner';

const EditDish = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const dish = useAppSelector(selectOneDish);
  const fetchLoading = useAppSelector(selectOneFetchDishLoading);
  const editLoading = useAppSelector(selectEditDishLoading);

  const getDishById = useCallback(async () => {
    if (id) {
      dispatch(getOneDishById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    void getDishById();
  }, [getDishById]);

  const edit = async  (dish: ApiDish) => {
    if (id) {
      await dispatch(editDish({dishId: id, dish}));
      navigate('/');
      toast.success("Dish was edited successfully");
    }
  };

  return (
    <div>
      {fetchLoading ? <Spinner /> :
        <>
          {dish ? <DishForm addNewDish={edit} existingDish={dish} isEdit={true} isLoading={editLoading} /> : navigate('/')}
        </>
      }
    </div>
  );
};

export default EditDish;