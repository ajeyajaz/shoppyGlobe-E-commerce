import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const product = state.cartItems.find(product => product.id === action.payload.id);
            if (!product) state.cartItems.push({ ...action.payload, quantity: + 1 });
        }
    }
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;


