import { IDish } from '../../types';
import { createSlice } from '@reduxjs/toolkit';

interface DishState {
  dishes: IDish[];
  isFetchingLoading: boolean;
}

const initialState: DishState = {
  dishes: [],
  isFetchingLoading: false,
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {

  }
});

export const dishesReducer = dishesSlice.reducer;
export const {} = dishesSlice.actions;