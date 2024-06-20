import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
const Appstore= configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
        },
    }
);

export default Appstore;