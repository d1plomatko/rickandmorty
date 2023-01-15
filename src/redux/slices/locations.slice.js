import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {locationsService} from "../../services";

const initialState = {
    locations: [],
    totalPages: 1,
    error: null,
    loading: false
};

const getLocations = createAsyncThunk(
    'locationsSlice/getLocations',
    async ({page, name, type, dimension}, {rejectWithValue}) => {
        try {
            return await locationsService.getLocations(page, name, type, dimension)
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const locationsSlice = createSlice({
    name: 'locationsSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getLocations.fulfilled, (state, action) => {
                state.locations = action.payload.results
                state.totalPages = action.payload.info.pages
                state.error = null
                state.loading = false
            })
});

const {reducer: locationsReducer} = locationsSlice

const locationsActions = {
    getLocations
}

export {
    locationsReducer,
    locationsActions
};