import { IDish } from '../types';
import { createSlice } from '@reduxjs/toolkit';

interface DishState {
  dishes: IDish[];
}

const initialState: DishState = {
  dishes: [],
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {

  }
});

export const dishesReducer = dishesSlice.reducer;
export const {} = dishesSlice.actions;