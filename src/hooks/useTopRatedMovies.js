import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const memo = useSelector((store) => store.movies.TopRatedMovies);
    const getNowPlayingMovie = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated",
            API_OPTIONS
        );
        const json = await data?.json();
       // console.log(json.results);
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        if(!memo)
        getNowPlayingMovie();
    }, []);
}
export default useTopRatedMovies;