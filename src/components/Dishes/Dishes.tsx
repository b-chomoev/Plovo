import React from 'react';
import DishItem from './DishItem.tsx';

interface Props {
  dishes: IDish[];
}

const Dishes: React.FC<Props> = ({dishes}) => {
  return (
    <>
      {dishes.map(dish => (
        <DishItem key={dish.id} dish={dish} />
      ))}
    </>
  );
};

export default Dishes;