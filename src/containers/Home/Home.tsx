import Dishes from '../../components/Dishes/Dishes';
import Cart from '../../components/Cart/Cart';
import { DishCart, IDish } from '../../types';
import * as React from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import axiosAPI from '../../axiosAPI';
import { useCallback } from 'react';


interface Props {
  dishes: IDish[];
  cart: DishCart[];
  isLoadingDishes?: boolean;
  fetchDishes: () => void;
}

const Home: React.FC<Props> = ({dishes, cart, isLoadingDishes = false, fetchDishes}) => {

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
            <Cart cart={cart}/>
          </div>
        </div>
      }
    </>

  );
};

export default Home;