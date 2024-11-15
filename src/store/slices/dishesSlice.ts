import { IDish } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteOneDish, fetchAllDishes } from '../thunks/dishesThunk';
import { RootState } from '../../app/store';

interface DishState {
  dishes: IDish[];
  isFetchingLoading: boolean;
  isDeleteLoading: boolean;
}

const initialState: DishState = {
  dishes: [],
  isFetchingLoading: false,
  isDeleteLoading: false,
};

export const selectDishes = (state: RootState) => state.dishes.dishes;
export const selectFetchDishesLoading = (state: RootState) => state.dishes.isFetchingLoading;

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
        state.isFetchingLoading = false;
      })
      .addCase(fetchAllDishes.rejected, state => {
        state.isFetchingLoading = false;
      })
      .addCase(deleteOneDish.pending, state => {
        state.isDeleteLoading = true;
      })
      .addCase(deleteOneDish.fulfilled, (state) => {
        state.isDeleteLoading = false;
      })
      .addCase(deleteOneDish.rejected, state => {
        state.isDeleteLoading = false;
      });
  }
});

export const dishesReducer = dishesSlice.reducer;
export const {} = dishesSlice.actions;