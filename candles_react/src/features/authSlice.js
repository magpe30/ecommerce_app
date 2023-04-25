import { createSlice } from '@reduxjs/toolkit';
import axiosConfig from '../axiosConfig';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || null,
    },

    reducers: {
        login(state, action) {
            state.token = action.payload;
            axiosConfig.defaults.headers.common["Authorization"] = "Token " + action.payload;
            localStorage.setItem('token', action.payload);
        },
        logout(state) {
            state.token = null;
            localStorage.removeItem('token');
        }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;