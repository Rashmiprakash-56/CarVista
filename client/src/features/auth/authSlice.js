import { createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLoggedIn: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    clearToken: (state) => {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export const register = (userData) => async (dispatch) => {
  try {
    const res = await api.post('/api/auth/register', userData);
    dispatch(setToken(res.data.token));
  } catch (error) {
    console.error('Registration error', error.response.data.msg);
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const res = await api.post('/api/auth/login', userData);
    dispatch(setToken(res.data.token));
  } catch (error) {
    console.error('Login error', error.response.data.msg);
  }
};

export const logout = () => async (dispatch) => {
  await api.post('/api/auth/logout');
  dispatch(clearToken());
};

export default authSlice.reducer;
