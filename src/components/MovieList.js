import MovieCard from "./MovieCard";
import "../App.css";
const MovieList = ({ title, movies , text_color}) => {
    return (
        <div className="">
            <h1 className=" text-xl sm:text-2xl font-bold py-3 text-white">{title}</h1>
            <div className="flex  overflow-x-scroll hideScroll ">
                <div className="flex">
                    {movies?.length > 0 && movies.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id} moviename={movie.original_title} date={movie.release_date} color={text_color}/>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default MovieList;
