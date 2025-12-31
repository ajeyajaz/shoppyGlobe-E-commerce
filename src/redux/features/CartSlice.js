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
                    itemPrice: action.payload.price  // price * quantity
                });
        },
        updateCart: (state, action) => {
            const payload = action.payload;
            const product = state.cartItems.find(product => product.id === payload.id);

            const calculatedPrice = product.price * payload.quantity;
            const originalPrice = calculatedPrice / (1 - product.discountPercentage / 100)

            product.quantity = payload.quantity;
            product.itemPrice = calculatedPrice.toFixed(2);
            product.originalPrice = originalPrice.toFixed(2);

        }
    }
});

export const { addCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;


