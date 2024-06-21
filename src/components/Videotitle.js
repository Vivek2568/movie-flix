const VideoTitle = ({ title, overView }) => {
    return (
        <div className="w-screen aspect-video pt-2 md:pt-16 lg:pt-[10%] px-6 md:px-12 lg:px-16 sm:absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">{title}</h1>
            <p className="py-2 md:py-4 text-sm md:text-lg lg:text-base w-full md:w-1/2 lg:w-1/4">{overView}</p>
            <div className="flex gap-3 pb-4">
                <button className="bg-white text-black p-1 px-2 md:px-3 lg:px-4 m-1 rounded-md text-sm md:text-base lg:text-lg hover:bg-opacity-70">
                    ▷ Play
                </button>
                <button className="bg-gray-500 text-white p-1 px-2 md:px-6 lg:px-8 m-1 rounded-md text-sm md:text-base lg:text-lg bg-opacity-50">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
