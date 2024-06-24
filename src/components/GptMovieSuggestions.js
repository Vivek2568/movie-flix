import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
    const { movieName, tmdbmovie } = useSelector((store) => store.gpt);
    if(!movieName) return null;

    return (
        <div className="p-4 m-4 bg-black bg-opacity-80">
            {movieName.map((movie,index)=> <MovieList key={movie} title={movie} movies={tmdbmovie[index]}/>)}
            
        </div>
    );
};
export default GptMovieSuggestions;