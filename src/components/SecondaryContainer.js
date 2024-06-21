import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const Secondarycontainer =()=>{
    const movies=useSelector(store=>store?.movies);
    return <div className=" bg-black">
        <div className="-mt-[20%] px-12 relative z-20">
        <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies?.PopularMovies}/>
        <MovieList title={"Top-rated"} movies={movies?.TopRatedMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies?.UpcomingMovies}/>
        <MovieList title={"Action"} movies={movies?.nowPlayingMovies}/>
        </div>
    </div>
};
export default Secondarycontainer;