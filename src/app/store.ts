import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '../store/slices/cartSlice';
import { dishesReducer } from '../store/slices/dishesSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    dishes: dishesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;