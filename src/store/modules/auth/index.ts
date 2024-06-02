import { IUser } from '@/models/user';
import { RootState } from '@/store/root-reducer';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AuthState = {
  accessToken?: string;
  user?: IUser;
};

const initialState: AuthState = {};

const { actions, reducer: authReducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<{ user?: IUser; accessToken: string }>) {
      const { payload } = action;
      state.user = payload.user;
      state.accessToken = payload.accessToken;
    },

    clear() {
      return { ...initialState, isInit: true };
    },
  },
});

const authActions = { ...actions };

export { authReducer, authActions };

// ---------- SELECTOR ------- //
export const authSelector = (rootState: RootState) => rootState.auth.user;
export const accessToken = (rootState: RootState) => rootState.auth.accessToken;
