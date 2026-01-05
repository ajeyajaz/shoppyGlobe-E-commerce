import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/CartSlice'
import searchQueryReducer from './features/searchQuerySlice'


const store = configureStore({
    reducer: {
        cart: cartReducer,
        search: searchQueryReducer,
    }
})

export default store;