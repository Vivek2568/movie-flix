import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import Maincontainer from "./MainContainer";
import Secondarycontainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/UseUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import FooterPart from "./Footer";

const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    useNowplayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return (
        <div >
            <Header />
            {showGptSearch ? (<GptSearch />)
                : (
                    <>
                        <Maincontainer />
                        <Secondarycontainer />
                        <FooterPart/>
                    </>
            )}
        </div>
    )
}
export default Browse;