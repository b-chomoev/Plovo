import Dishes from '../../components/Dishes/Dishes';
import Cart from '../../components/Cart/Cart';
import { DishCart, IDish } from '../../types';
import * as React from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';


interface Props {
  dishes: IDish[];
  AddDishToCart: (dish: IDish) => void;
  cart: DishCart[];
  isLoadingDishes?: boolean;
}

const Home: React.FC<Props> = ({dishes, AddDishToCart, cart, isLoadingDishes = false}) => {
  return (
    <>
      {isLoadingDishes ? <Spinner/> :
        <div className="row justify-content-between">
          <div className="col col-md-5 mb-2">
            <Dishes dishes={dishes} addToCart={AddDishToCart}/>
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