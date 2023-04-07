import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? 
        JSON.parse(localStorage.getItem('cartItems'))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            state.cartItems.push(action.payload);
            toast.success("Product added to cart", {
                position: "top-right",
            });
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;