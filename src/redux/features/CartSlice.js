import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const payload = action.payload;
            const product = state.cartItems.find(product => product.id === payload.id);

            if (!product) state.cartItems.push(
                {
                    ...payload,
                    quantity: 1,
                });
        },
        updateCart: (state, action) => {
            const payload = action.payload;

            const product = state.cartItems.find(product => product.id === payload.id);
            product.quantity = payload.quantity;
        },
        removeCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.cartItems.length = 0;
        }
    }
});

export const { addCart, updateCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


