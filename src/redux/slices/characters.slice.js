import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {charactersService} from "../../services";

const initialState = {
    characters: [],
    totalPages: 1,
    error: null,
    loading: false,
}

const getAll = createAsyncThunk(
    'charactersSlice/getAll',
    async ({page, species, status, gender}, {rejectWithValue}) => {
        try {
            return await charactersService.getAll(page, species, status, gender)
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const charactersSlice = createSlice({
        name: 'charactersSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    state.characters = action.payload.results
                    state.totalPages = action.payload.info.pages
                    // state.error = null
                    state.loading = false
                })
                .addCase(getAll.pending, (state) => {
                    state.loading = true
                    state.error = null
                })
                .addCase(getAll.rejected, (state, action) => {
                    state.error = action.payload
                    state.loading = false
                })
    }
);

const {reducer: charactersReducer} = charactersSlice

const charactersActions = {
    getAll
}

export {
    charactersReducer,
    charactersActions
};