import { useSelector } from "react-redux";
import VideoBackground from "./videoBackground";
import VideoTitle from "./Videotitle";
const Maincontainer =()=>{
    const movies= useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies)return;
    const mainMovie=movies[0];
    const {original_title, overview, id}=mainMovie; 
    return <div>
        <VideoTitle title={original_title} overView={overview}/>
        <VideoBackground movieId={id}/>
    </div>
};
export default Maincontainer;