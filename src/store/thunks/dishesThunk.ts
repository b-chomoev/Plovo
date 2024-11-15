import { createAsyncThunk } from '@reduxjs/toolkit';
import { DishesList, IDish } from '../../types';
import axiosAPI from '../../axiosAPI';

export const fetchAllDishes = createAsyncThunk<IDish[], void>(
  'dishes/fetchAllDishes',
  async () => {
    const response: {data: DishesList | null} = await axiosAPI('dishes.json');
    const dishesList = response.data;

    if (dishesList === null) {
      return [];
    }

    const dishes: DishesList = dishesList;

    return Object.keys(dishesList).map(dish => {
      return {
        ...dishes[dish],
        id: dish,
      };
    });
  }
);