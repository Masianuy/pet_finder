import { combineReducers, configureStore } from '@reduxjs/toolkit';
import petsSlice from './slices/petsSlice';

const rootReducer = combineReducers({
  petsList: petsSlice,
});

const store = configureStore({ reducer: rootReducer });

export default store;
