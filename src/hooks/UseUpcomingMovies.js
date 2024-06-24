import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const memo = useSelector((store) => store.movies.UpcomingMovies);
    const getNowPlayingMovie = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming",
            API_OPTIONS
        );
        const json = await data?.json();
       // console.log(json.results);
        dispatch(addUpcomingMovies(json.results));
    };

    useEffect(() => {
        if(!memo)
        getNowPlayingMovie();
    }, []);
}
export default useUpcomingMovies