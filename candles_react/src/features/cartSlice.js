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
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            )

            if(existingIndex >= 0) {
                state.cartItems[existingIndex].quantity += action.payload.quantity;
            } else {
                state.cartItems.push(action.payload);
            }
            toast.success("Product added to cart", {
                position: "top-left",
            });
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter((cartItem) => 
                cartItem.id !== action.payload.id
            )

            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            toast.success("item deleted successfully", {
                position: "top-left"
            })
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )

            if(state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;
            } else if (state.cartItems[itemIndex].quantity === 1) {
                const nextCartItems = state.cartItems.filter((cartItem) => 
                   cartItem.id !== action.payload.id
                )

                state.cartItems = nextCartItems;

                toast.success("item deleted successfully", {
                    position: "top-left"
                })
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        increaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            );
            
            state.cartItems[itemIndex].quantity++ ;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        getTotal(state,) {
            let { total, quantity } = state.cartItems.reduce((sum, item) => {
                const { price, quantity } = item;
                const itemTotal = price * quantity;

                sum.total += itemTotal;
                sum.quantity += quantity;

                return sum;
            }, {
                total: 0,
                quantity: 0,
            });

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
        clearCart(state,) {
            state.cartItems = [];
            state.cartTotalQuantity = 0;
            state.cartTotalAmount = 0;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            toast.success('cart clearned', {position: 'top-left'})
        }
    }
});

export const { addToCart, removeFromCart, decreaseCart, increaseCart, getTotal, clearCart } = cartSlice.actions;

export default cartSlice.reducer;