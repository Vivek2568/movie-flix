import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";
const MovieCard = ({ posterPath, movieId }) => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate(`/movie/${movieId}`);
    }
    if (!posterPath) return null;
    return (
        <div className="w-48 pr-4 pl-2 ">
            <img  className="rounded-lg hover:shadow-xl hover:shadow-rose-950 transition-all ease-in-out  duration-300"
            alt="Movie-img" src={IMG_CDN_URL + posterPath} onClick={handleClick} />
        </div>
    )
}
export default MovieCard;