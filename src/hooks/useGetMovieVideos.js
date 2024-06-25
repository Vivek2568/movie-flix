import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
const useMovieVideos = (movieId) => {
    const dispatch = useDispatch();
    const memo = useSelector((store) => store.movies.trailerVideo);
    const getMovieVideos = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
        const json = await response.json();
        const filterTrailer = json?.results?.filter((video) => video?.type == "Trailer");
        const trailer = filterTrailer?.length ? filterTrailer[0] : json?.results[0];
        dispatch(addtrailerVideo(trailer));
    };

    useEffect(() => {
        if (!memo) getMovieVideos();

    }, []);
};

export default useMovieVideos;
