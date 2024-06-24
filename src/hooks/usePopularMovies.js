import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const usePopularMovies = () => {
    const dispatch = useDispatch();
    const memo = useSelector((store) => store.movies.PopularMovies);
    const getNowPlayingMovie = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular",
            API_OPTIONS
        );
        const json = await data?.json();
        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        if(!memo)
        getNowPlayingMovie();
    }, []);
}
export default usePopularMovies;