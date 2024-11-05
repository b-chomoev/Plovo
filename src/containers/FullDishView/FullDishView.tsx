import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axiosAPI from '../../axiosAPI';
import { IOrderAPI } from '../../types';

const FullDishView = () => {
  const params = useParams();
  useEffect(() => {
    console.log(params);
    axiosAPI<IOrderAPI>('orders/' + params.dishId + '.json');
  }, [params]);

  return (
    <div>
      Info about the dish
    </div>
  );
};

export default FullDishView;