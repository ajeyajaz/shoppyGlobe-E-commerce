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

        }
    }
});

export const { addCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;


