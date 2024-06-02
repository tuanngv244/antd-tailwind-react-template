import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './modules/auth';

const allReducers = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof allReducers>;

export default allReducers;
