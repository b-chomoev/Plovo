import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axiosAPI from '../../axiosAPI.ts';
import { IOrderAPI } from '../../types';

const FullDishView = () => {
  const params = useParams();
  useEffect(() => {
    console.log(params);
    axiosAPI.get<IOrderAPI>('orders/' + params.dishId + '.json');
  }, [params]);

  return (
    <div>
      Info about the dish
    </div>
  );
};

export default FullDishView;