import { useSelector } from "react-redux";
import useMovieVideos from "../hooks/useGetMovieVideos";

const VideoBackground = ({movieId}) => {
    useMovieVideos(movieId);
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    return <div >
        <iframe className="w-screen aspect-video"
          src={"https://www.youtube.com/embed/"+trailerVideo?.key +"?&autoplay=1&mute=1&rel=0" } 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" >
          </iframe>
    </div>
};
export default VideoBackground;