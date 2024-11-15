import { DishCart } from '../types';
import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  cartDishes: DishCart[];
}

const initialState: CartState = {
  cartDishes: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  }
});

export const cartReducer = cartSlice.reducer;
export const {} = cartSlice.actions;