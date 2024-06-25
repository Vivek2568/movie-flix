import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";
const MovieCard = ({ posterPath, movieId, moviename, date, color }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/movie/${movieId}`);
    }
    if (!posterPath) return null;
    return (
        <div className=" w-40 sm:w-48 pr-4 pl-4 ">
            <img className="rounded-lg hover:shadow-xl hover:cursor-pointer hover:shadow-rose-950 transition-all ease-in-out hover:scale-125 duration-300"
                alt="Movie-img " src={IMG_CDN_URL + posterPath} onClick={handleClick} />
            <div>
                {!color && <div>
                    <h3 className="text-white font-bold pl-[5%]">{moviename}</h3>
                    <h5 className="text-white pl-[5%]">{date}</h5>
                </div>}
                {color && <div>
                    <h3 className="text-black font-bold pl-[5%]">{moviename}</h3>
                    <h5 className="text-black pl-[5%]">{date}</h5>
                </div>}

            </div>
        </div>
    )
}
export default MovieCard;