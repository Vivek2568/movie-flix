import { useSelector } from "react-redux";
import VideoBackground from "./videoBackground";
import VideoTitle from "./Videotitle";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies) return null;

    const mainMovie = movies[15];
    const { original_title, overview, id } = mainMovie;

    return (
        <div className="">
            <div className="hidden sm:flex sm:relative sm:w-screen">
                <VideoBackground movieId={id} className="absolute inset-0 z-0" />
                <VideoTitle title={original_title} overView={overview} className="absolute z-10 w-[30%]" />
            </div>
            <div className="block sm:hidden">
                <VideoBackground movieId={id} />
                <div className="">
                <VideoTitle  title={original_title} overView={overview}  />
                </div>
            </div>
        </div>
    );
};

export default MainContainer;
