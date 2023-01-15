import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {charactersReducer, episodesReducer, locationsReducer} from "./slices";


const rootReducer = combineReducers({
    charactersReducer,
    episodesReducer,
    locationsReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};