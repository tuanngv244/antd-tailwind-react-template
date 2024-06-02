import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import allReducers, { RootState } from './root-reducer';
import { ENV } from '@/constants/env';

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET') state = undefined;
  return allReducers(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  // configureStore sử dụng redux-thunk như default middleware
  // middleware: (getDefaultMiddleware) =>
  // 	getDefaultMiddleware().concat(thunkMiddleware),
  devTools: ENV === 'development',
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export type Store = typeof store;

export default store;
