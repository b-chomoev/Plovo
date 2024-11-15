import Dishes from '../../components/Dishes/Dishes';
import Cart from '../../components/Cart/Cart';
import Spinner from '../../components/UI/Spinner/Spinner';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectDishes, selectFetchDishesLoading } from '../../store/slices/dishesSlice';
import { deleteOneDish, fetchAllDishes } from '../../store/thunks/dishesThunk';

const Home = () => {
  const isLoadingDishes = useAppSelector(selectFetchDishesLoading);
  const dishes = useAppSelector(selectDishes);
  const dispatch = useAppDispatch();

  const fetchDishes = useCallback(async () => {
    await dispatch(fetchAllDishes());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchDishes();
    }
  }, [fetchDishes]);

  const deleteDish = useCallback(async (id: string) => {
    await dispatch(deleteOneDish(id));
    await fetchDishes();
  }, [dispatch,fetchDishes]);

  return (
    <>
      {isLoadingDishes ? <Spinner/> :
        <div className="row justify-content-between">
          <div className="col col-md-5 mb-2">
            {dishes.length > 0 ?
              <Dishes dishes={dishes} deleteDish={deleteDish}/>
              : <h3>No dishes</h3>
            }
          </div>
          <div className="col col-md-5 mb-2">
            <Cart/>
          </div>
        </div>
      }
    </>

  );
};

export default Home;