import { DishCart, IDish } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    addDish: (state, {payload: dish}: PayloadAction<IDish>) => {
      const indexDish = state.cartDishes.findIndex(dishCart => dishCart.dish === dish);

      if (indexDish === -1) {
        state.cartDishes = [...state.cartDishes, {dish, amount: 1}];
      } else {
        const cartCopy = [...state.cartDishes];
        const copyDishCart = {...cartCopy[indexDish]};
        copyDishCart.amount++;
        cartCopy[indexDish] = copyDishCart;

        state.cartDishes = [...cartCopy];
      }
    }
  }
});

export const cartReducer = cartSlice.reducer;
export const {addDish} = cartSlice.actions;