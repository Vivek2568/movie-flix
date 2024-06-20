import { IoPlay } from "react-icons/io5";
const VideoTitle = ({ title, overView }) => {
    return (
    <div className="w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="font-bold text-4xl">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overView}</p>
        <div className="gap-3">
            <button className="bg-white text-black p-2 px-8 mx-1 rounded-md text-lg hover:bg-opacity-70 "> ▷ Play </button>
            <button className="bg-gray-500 text-white p-2 px-8 mx-1 rounded-md text-lg bg-opacity-50">More Info</button>
        </div>
    </div>)
};
export default VideoTitle;