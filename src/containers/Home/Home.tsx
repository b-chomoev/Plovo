import Dishes from '../../components/Dishes/Dishes';
import Cart from '../../components/Cart/Cart';
import { IDish } from '../../types';
import * as React from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import axiosAPI from '../../axiosAPI';
import { useCallback } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectFetchDishesLoading } from '../../store/slices/dishesSlice';


interface Props {
  dishes: IDish[];
  fetchDishes: () => void;
}

const Home: React.FC<Props> = ({dishes, fetchDishes}) => {
  const isLoadingDishes = useAppSelector(selectFetchDishesLoading);

  const deleteDish = useCallback(async (id: string) => {
    try {
      await axiosAPI.delete(`dishes/${id}.json`);
      await fetchDishes();
    } catch (e) {
      console.error(e);
    }
  }, [fetchDishes]);

  return (
    <>
      {isLoadingDishes ? <Spinner/> :
        <div className="row justify-content-between">
          <div className="col col-md-5 mb-2">
            {dishes.length > 0 ?
              <Dishes dishes={dishes} deleteDish={deleteDish} />
              : <h3>No dishes</h3>
            }
          </div>
          <div className="col col-md-5 mb-2">
            <Cart />
          </div>
        </div>
      }
    </>

  );
};

export default Home;