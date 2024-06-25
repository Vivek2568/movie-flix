import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constant";
import MovieHero from "./MovieShow";
import { useState } from "react";
const MoviePage = () => {
    const[moviedetail,setmoviedetail]=useState(null);
    const id=useParams();
    console.log(id);
    const data = async () => {
        const detail = await fetch(`https://api.themoviedb.org/3/movie/1022789?language=en-US`,
            API_OPTIONS);
        const json = await detail?.json();
       // console.log(json);
    }
    const MovieDetail = data();
    console.log(MovieDetail);
    return (
        <div>
            {/* //<h1>hello from here</h1> */}
            <MovieHero moviedetail={MovieDetail} />
        </div>

    )
};
export default MoviePage;