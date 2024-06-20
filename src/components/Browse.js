import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import Maincontainer from "./MainContainer";
const Browse =()=>{
    useNowplayingMovies();
    return(
        <div className="flex ">
           <Header/> 
           <Maincontainer/> 
        </div>
    )
}
export default Browse;