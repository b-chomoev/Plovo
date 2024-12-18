import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiDish, DishesList, IDish } from '../../types';
import axiosAPI from '../../axiosAPI';
import { updateCart } from '../slices/cartSlice';

export const fetchAllDishes = createAsyncThunk<IDish[], void>(
  'dishes/fetchAllDishes',
  async (_arg, thunkAPI) => {
    const response: { data: DishesList | null } = await axiosAPI('dishes.json');
    const dishesList = response.data;

    if (dishesList === null) {
      return [];
    }

    const dishes: DishesList = dishesList;

    const newDishes = Object.keys(dishesList).map(dish => {
      return {
        ...dishes[dish],
        id: dish,
      };
    });

    thunkAPI.dispatch(updateCart(newDishes));
    return newDishes;
  }
);

export const deleteOneDish = createAsyncThunk<void, string>(
  'dishes/deleteOneDish',
  async (id: string) => {
    await axiosAPI.delete(`dishes/${id}.json`);
  }
);

export const createDish = createAsyncThunk<void, ApiDish>(
  'dishes/createDish',
  async (dish) => {
    await axiosAPI.post('dishes.json', {...dish});
  }
);

export const getOneDishById = createAsyncThunk<ApiDish | null, string>(
  'dishes/getOneDishById',
  async (id) => {
    const response = await axiosAPI.get<ApiDish | null>(`dishes/${id}.json`);

    if (!response.data) {
      return null;
    }

    return response.data;
  }
);

export const editDish = createAsyncThunk<void, {dishId: string, dish: ApiDish}>(
  'dishes/editDish',
  async ({dishId, dish}) => {
    await axiosAPI.put(`dishes/${dishId}.json`, {...dish});
  }
);