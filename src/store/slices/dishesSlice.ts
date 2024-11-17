import { ApiDish, IDish } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createDish, deleteOneDish, fetchAllDishes, getOneDishById } from '../thunks/dishesThunk';
import { RootState } from '../../app/store';

interface DishState {
  dishes: IDish[];
  oneDish: ApiDish | null;
  isFetchingLoading: boolean;
  isDeleteLoading: boolean | string;
  isCreateLoading: boolean;
}

const initialState: DishState = {
  dishes: [],
  oneDish: null,
  isFetchingLoading: false,
  isDeleteLoading: false,
  isCreateLoading: false,
};

export const selectDishes = (state: RootState) => state.dishes.dishes;
export const selectFetchDishesLoading = (state: RootState) => state.dishes.isFetchingLoading;
export const selectCreateDishLoading = (state: RootState) => state.dishes.isCreateLoading;
export const selectOneDish = (state: RootState) => state.dishes.oneDish;

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
      })
      .addCase(getOneDishById.pending, (state) => {
        state.isFetchingLoading = true;
        state.oneDish = null;
      })
      .addCase(getOneDishById.fulfilled, (state, action: PayloadAction<ApiDish | null>) => {
        state.isFetchingLoading = false;
        state.oneDish = action.payload;
      })
      .addCase(getOneDishById.rejected, state => {
        state.isFetchingLoading = false;
      });
  }
});

export const dishesReducer = dishesSlice.reducer;
export const {} = dishesSlice.actions;