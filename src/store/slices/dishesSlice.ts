import { ApiDish, IDish } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createDish, deleteOneDish, editDish, fetchAllDishes, getOneDishById } from '../thunks/dishesThunk';
import { RootState } from '../../app/store';

interface DishState {
  dishes: IDish[];
  oneDish: ApiDish | null;
  isFetchingLoading: boolean;
  isOneFetchingLoading: boolean;
  isDeleteLoading: boolean | string;
  isCreateLoading: boolean;
  isEditLoading: boolean;
}

const initialState: DishState = {
  dishes: [],
  oneDish: null,
  isFetchingLoading: false,
  isOneFetchingLoading: false,
  isDeleteLoading: false,
  isCreateLoading: false,
  isEditLoading: false,
};

export const selectDishes = (state: RootState) => state.dishes.dishes;
export const selectFetchDishesLoading = (state: RootState) => state.dishes.isFetchingLoading;
export const selectOneFetchDishLoading = (state: RootState) => state.dishes.isOneFetchingLoading;
export const selectCreateDishLoading = (state: RootState) => state.dishes.isCreateLoading;
export const selectOneDish = (state: RootState) => state.dishes.oneDish;
export const selectEditDishLoading = (state: RootState) => state.dishes.isEditLoading;

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
        state.isOneFetchingLoading = true;
        state.oneDish = null;
      })
      .addCase(getOneDishById.fulfilled, (state, action: PayloadAction<ApiDish | null>) => {
        state.isOneFetchingLoading = false;
        state.oneDish = action.payload;
      })
      .addCase(getOneDishById.rejected, state => {
        state.isOneFetchingLoading = false;
      })
      .addCase(editDish.pending, (state) => {
        state.isEditLoading = true;
      })
      .addCase(editDish.fulfilled, (state) => {
        state.isEditLoading = false;
        state.oneDish = null;
      })
      .addCase(editDish.rejected, state => {
        state.isEditLoading = false;
      });
  }
});

export const dishesReducer = dishesSlice.reducer;
export const {} = dishesSlice.actions;