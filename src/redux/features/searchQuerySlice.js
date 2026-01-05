import { createSlice } from "@reduxjs/toolkit";

const seachQuery = createSlice({
    name: 'searchQuery',
    initialState: { query: '' },
    reducers: {
        setSearchQuery: (state, action) => {
            state.query = action.payload;
        }
    }

});

export const { setSearchQuery } = seachQuery.actions;
export default seachQuery.reducer;