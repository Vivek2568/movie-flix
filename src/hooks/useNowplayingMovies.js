import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const memo=useSelector((store)=>store.movies.nowPlayingMovies);

    const getNowPlayingMovie = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",
            API_OPTIONS
        );
        const json = await data?.json();
       // console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        if(!memo) getNowPlayingMovie();
    }, []);
}
export default useNowPlayingMovies;