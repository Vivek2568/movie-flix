import React, { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constant";
import Cast from "./Cast";
import MovieList from "./MovieList";
import useGetrecommended from "../hooks/useRecommendedMovies";
import FooterPart from "./Footer";
function MovieHero({ props }) {
    props = useParams();
    const RecommendData = useGetrecommended(props.id);
    //console.log(RecommendData);
    const [moviedetails, setmoviedetail] = useState(null);
    const [castdetails, setcastdetails] = useState(null);
    // let data = null;
    const data = async () => {
        const detail = await fetch('https://api.themoviedb.org/3/movie/' + props.id + '?language=en-US',
            API_OPTIONS);
        const json = await detail?.json();
        setmoviedetail(json);
    }
    const castdata = async () => {
        const cast = await fetch('https://api.themoviedb.org/3/movie/' + props.id + '/credits?language=en-US',
            API_OPTIONS);
        const json = await cast?.json();

        setcastdetails(json.cast);
    }
    if (!null) data();
    castdata();
    return (
        <>
            <div className=" relative m-auto " style={{ height: "35rem" }}>
                <div className="absolute h-full w-full " style={{ backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)" }} />
                <img src={`https://image.tmdb.org/t/p/original${moviedetails?.backdrop_path}`}
                    alt="Mission Impossible" className="h-full w-full" style={{ height: "35rem" }}
                />
                <div className=" absolute flex  items-center justify-between z-40  top-16 lg:left-52 md:left-32 left-12 gap-2 ">

                    <div className="  hidden sm:block sm:w-2/3" >
                        <img src={`https://image.tmdb.org/t/p/original${moviedetails?.poster_path}`} className="md:w-72 rounded-lg md:h-96 w-60" />
                    </div>
                    <div className="z-40 flex flex-col items-start gap-4 pr-10 m-auto  md:w-2/3">
                        <div className="w-1/2">

                            <h1 className="text-white font-extrabold text-4xl leading-10">{moviedetails?.title}</h1>

                        </div>
                        <div>
                            <h3 className="text-white font bold flex flex-row justify-between gap-3 m-auto">
                                <FaRegThumbsUp className="text-green-300 color-green-300" /> {(moviedetails?.popularity)}K
                            </h3>
                        </div>
                        <div className="flex flex-row border-white gap-3  rounded border">
                            <div className="py-0.5">
                                <h2 className="px-2 text-white">In cinemas</h2>
                                <p className=" px-2 text-white text-xs">Are you interested in watching this movie?</p>
                            </div >
                            <div className="px-2 pl-px py-2">
                                <button className="bg-white rounded-sm hover:bg-green-500 "><p className="text-xs px-1 py-1 hover:text-black">I'm interested</p></button>
                            </div>
                        </div>
                        <div className="flex flex-row bg-white rounded-sm gap-1 px-2 mt-2">
                            <h2 className="text-md"> 2D, MX4D, ICE, 4DX, IMAX 2DX, 2D SCREEN X</h2>

                        </div>
                        <div className="flex flex-row bg-white rounded-sm gap-1 px-2">
                            <h2 className="text-md  hover:underline">Hindi, English, Telgu, Tamil</h2>

                        </div>
                        <div className="flex flex-row rounded-sm gap-1 px-2">
                            <h3 className="text-md text-white font-medium ">2h 45m . Action, Thriller , Adventure, UA . 12 JULY 2023</h3>

                        </div>

                    </div>

                </div>
                <div className="gap-6 flex flex-col">
                    <div className=" flex flex-col gap-4 lg:px-48 md:px-24 w-full px-8 ">
                        <h1 className="text-2xl font-bold py-6">About the Movie</h1>
                        <p className="py-2 text-md">{moviedetails?.overview}</p>
                    </div>
                    <div className=" my-4 sm:my-8 px-48">
                        <hr />
                    </div>
                </div >
                <div className="mx-[12%] mt-[2%]">
                    <h1 className="font-bold text-xl sm:text-2xl my-4 ml-4">Cast</h1>
                    <div className=" gap-6 w-full px-8 flex overflow-x-scroll">
                        {castdetails?.map((castdetail) => (
                            <Cast
                                image={`https://image.tmdb.org/t/p/original/${castdetail.profile_path}`}
                                castName={castdetail.original_name}
                                role={castdetail.character}
                            />
                        ))}
                    </div>
                </div>
                <div className="mx-[12%] mt-[2%]">
                    <h1 className="font-bold text-xl sm:text-2xl   ml-4">Recommended Movies</h1>
                    <MovieList title={"Recommended Movies"} movies={RecommendData} />
                </div>
                <div className="bg-black"><FooterPart /></div>
            </div>
        </>
    )
};
export default MovieHero;