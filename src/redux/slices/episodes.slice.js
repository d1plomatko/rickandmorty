import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {episodesService} from "../../services";

const initialState = {
    episodes: [],
    totalPages: 1,
    error: null,
    loading: false
};


const getEpisodes = createAsyncThunk(
    'episodesSlice/getEpisodes',
    async ({page, name}, {rejectWithValue}) => {
        try {
            return await episodesService.getEpisodes(page, name)
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getEpisodes.fulfilled, (state, action) => {
                state.episodes = action.payload.results
                state.totalPages = action.payload.info.pages
                state.error = null
                state.loading = false
            })
});

const {reducer: episodesReducer} = episodesSlice

const episodesActions = {
    getEpisodes
};

export {
    episodesReducer,
    episodesActions
};