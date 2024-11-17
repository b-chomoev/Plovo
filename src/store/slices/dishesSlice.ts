import { IDish } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createDish, deleteOneDish, fetchAllDishes } from '../thunks/dishesThunk';
import { RootState } from '../../app/store';

interface DishState {
  dishes: IDish[];
  isFetchingLoading: boolean;
  isDeleteLoading: boolean | string;
  isCreateLoading: boolean;
}

const initialState: DishState = {
  dishes: [],
  isFetchingLoading: false,
  isDeleteLoading: false,
  isCreateLoading: false,
};

export const selectDishes = (state: RootState) => state.dishes.dishes;
export const selectFetchDishesLoading = (state: RootState) => state.dishes.isFetchingLoading;
export const selectCreateDishLoading = (state: RootState) => state.dishes.isCreateLoading;

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
      .addCase(deleteOneDish.pending, (state, {meta}) => {
        state.isDeleteLoading = meta.arg;
      })
      .addCase(deleteOneDish.fulfilled, (state) => {
        state.isDeleteLoading = false;
      })
      .addCase(deleteOneDish.rejected, state => {
        state.isDeleteLoading = false;
      })
      .addCase(createDish.pending, (state) => {
        state.isCreateLoading = true;
      })
      .addCase(createDish.fulfilled, (state) => {
        state.isCreateLoading = false;
      })
      .addCase(createDish.rejected, state => {
        state.isCreateLoading = false;
      });
  }
});

export const dishesReducer = dishesSlice.reducer;
export const {} = dishesSlice.actions;