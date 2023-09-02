import { createSlice } from '@reduxjs/toolkit';
import {DATA_PETS} from './../../api';

const PETS_SLICE_NAME = 'pets';

const initialState = {
  pets: [...DATA_PETS],
  isFetching: false,
  error: null,
};

const petsSlice = createSlice({
  name: PETS_SLICE_NAME,
  initialState,
  reducers: {
    getPets: (state, action) => {
      state.pets = [...DATA_PETS];
      state.isFetching = false;
      state.error = null;
    },
  },
});

const { reducer, actions } = petsSlice;
export const { getPets } = actions;
export default reducer;
