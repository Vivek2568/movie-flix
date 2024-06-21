import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovie = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular",
            API_OPTIONS
        );
        const json = await data?.json();
       // console.log(json.results);
        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        getNowPlayingMovie();
    }, []);
}
export default usePopularMovies;