import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="">
            <h1 className=" text-xl sm:text-2xl font-bold p-3 text-white">{title}</h1>
            <div className="flex overflow-x-scroll  ">
                <div className="flex">
                    {movies?.length > 0 && movies.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default MovieList;
