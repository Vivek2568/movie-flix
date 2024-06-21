import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import Maincontainer from "./MainContainer";
import Secondarycontainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/UseUpcomingMovies";

const Browse =()=>{
    useNowplayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return(
        <div >
           <Header/> 
           <Maincontainer/> 
           <Secondarycontainer/>
        </div>
    )
}
export default Browse;