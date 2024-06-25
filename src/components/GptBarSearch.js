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
        const data = await fetch(
            'https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1',
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    };

    const handleGptSearchClick = () => {
        async function run() {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const prompt = "show only 5 name of result of " + searchText.current.value + " and give only name For example: [Name1, Name2, Name3, Name4, Name5]";
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            const movieNames = text.split(",");
            if (!text) return <p>sorry</p>;
            const promiseArray = movieNames.map((movie) => fetchMoviefromTMDB(movie));
            const tmdbresults = await Promise.all(promiseArray);
            dispatch(addGptMoviesResults({ tmdbmovie: tmdbresults, movieName: movieNames }));
        }
        run();
    };

    return (
        <div className="pt-[20%] md:pt-[10%] flex justify-center">
            <form className="w-full max-w-lg grid grid-cols-12 gap-2 px-4 sm:px-0" onSubmit={(e) => e.preventDefault()}>
                <input 
                    ref={    searchText}
                    type="text"
                    className="col-span-9 py-2 border-2 border-black rounded-md"
                    placeholder="    What would you like to watch today?"
                />
                <button
                    className="col-span-3 text-xl bg-red-500 border-2 border-black rounded-md py-2"
                    onClick={handleGptSearchClick}
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default GptBarSearch;
