import { useRef } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMoviesResults } from "../utils/gptSlice";

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);
const GptBarSearch = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const fetchMoviefromTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1',
            API_OPTIONS);
        const json = await data.json();
        return json.results;
    };
    const handleGptSearchClick = () => {
        async function run() {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const prompt = "show only 5 name of result of" + searchText.current.value + "and give only name For example: [Name1, Name2, Name3, Name4, Name5]";
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            const movieNames = text.split(",");
            if (!text) return <p>sorry</p>;
            const promiseArray = movieNames.map((movie) => fetchMoviefromTMDB(movie));
            const tmdbresults = await Promise.all(promiseArray);
            //console.log(tmdbresults);
            dispatch(addGptMoviesResults({ tmdbmovie: tmdbresults, movieName: movieNames }));
        }
        run();
    };
    return (
        <div className="">
            <div className=" pt-[10%] flex justify-center">
                <form className="w-1/2 grid grid-cols-12 " onSubmit={(e) => e.preventDefault()} >
                    <input ref={searchText} type="text" className="  py-2 m-4 border-2 border-black col-span-9"
                        placeholder="   What would you like to watch today?" />
                    <button className="text-xl col-span-3  m-4  px-2 bg-red-500 border-2 border-black rounded-md" onClick={handleGptSearchClick}>Search</button>
                </form>
            </div>
        </div>
    );
};
export default GptBarSearch;