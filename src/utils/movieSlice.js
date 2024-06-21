import { createSlice } from "@reduxjs/toolkit";
const movieSlice= createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        PopularMovies:null,
        TopRatedMovies:null,
        trailerVideo:null,
        UpcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies=action.payload;
        },
        addtrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
    },
});

export const {addUpcomingMovies,addTopRatedMovies,addPopularMovies,addNowPlayingMovies,addtrailerVideo}=movieSlice.actions;

export default movieSlice.reducer;