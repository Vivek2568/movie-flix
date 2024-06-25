import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const useGetrecommended = (id) => {
    const [Recommended, setRecommended] = useState(null);
    const RecommendedMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/recommendations?language=en-US&page=1',
            API_OPTIONS);
        const json = await data?.json();
        console.log(json);
        setRecommended(json.results);

    };
    useEffect(() => {
        RecommendedMovie();
    }, [])
    return Recommended;
}
export default useGetrecommended;