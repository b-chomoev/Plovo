import { IDish } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllDishes } from '../thunks/dishesThunk';
import { RootState } from '../../app/store';

interface DishState {
  dishes: IDish[];
  isFetchingLoading: boolean;
}

const initialState: DishState = {
  dishes: [],
  isFetchingLoading: false,
};

export const selectDishes = (state: RootState) => state.dishes.dishes;

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDishes.pending, state => {
        state.isFetchingLoading = true;
      })
      .addCase(fetchAllDishes.fulfilled, (state, action: PayloadAction<IDish[]>) => {
        state.dishes = action.payload;
        state.isFetchingLoading = true;
      })
      .addCase(fetchAllDishes.rejected, state => {
        state.isFetchingLoading = false;
      });
  }
});

export const dishesReducer = dishesSlice.reducer;
export const {} = dishesSlice.actions;