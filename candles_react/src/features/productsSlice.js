import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../axiosConfig';

const initialState = {
    items: [],
    status: null,
}

export const productsFetch = createAsyncThunk(
    'products/productsFetch',
    async() => {
        const response = await axiosConfig.get('/api/v1/latest-products')
        return response?.data;
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = 'pending'
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = 'success'
            state.items = action.payload
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = 'rejected';
        }
    }
});

export default productsSlice.reducer;
