import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";
const MovieCard = ({ posterPath, movieId }) => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate(`/movie/${movieId}`);
    }
    if (!posterPath) return null;
    return (
        <div className=" w-40 sm:w-48 pr-4 pl-4 ">
            <img  className="rounded-lg hover:shadow-xl hover:cursor-pointer hover:shadow-rose-950 transition-all ease-in-out hover:scale-125 duration-300"
            alt="Movie-img " src={IMG_CDN_URL + posterPath} onClick={handleClick} />
        </div>
    )
}
export default MovieCard;