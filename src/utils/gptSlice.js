import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        tmdbmovie: [],
        movieName: [],
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMoviesResults: (state, action) => {
            const { tmdbmovie, movieName } = action.payload;
            state.tmdbmovie = tmdbmovie;
            state.movieName = movieName;
        },
        setDataNull:(state,action)=>{
           state.tmdbmovie.length=0;
           state.movieName.length=0; 
        }
    },
});

export const { toggleGptSearchView, addGptMoviesResults,setDataNull } = gptSlice.actions;
export default gptSlice.reducer;