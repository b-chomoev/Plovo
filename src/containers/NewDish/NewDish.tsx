import React from 'react';
import DishForm from '../../components/DishForm/DishForm.tsx';
import { IDish } from '../../types';

interface Props {
  addNewDish: (newDish: IDish) => void;
}

const NewDish: React.FC<Props> = ({addNewDish}) => {
  return (
    <>
      <div className="col-4 mb-2">
        <DishForm addNewDish={addNewDish}/>
      </div>
    </>
  );
};

export default NewDish;