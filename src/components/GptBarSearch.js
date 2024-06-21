const GptBarSearch = () => {
    return (
        <div className=" bg-gray-300 ">
            <div className=" pt-[10%] flex justify-center">
                <form className="w-1/2 grid grid-cols-12 ">
                    <input type="text" className="  py-2 m-4 border-2 border-black col-span-9"
                        placeholder="   What would you like to watch today?" />
                    <button className="text-xl col-span-3  m-4  px-2 bg-red-500 border-2 border-black rounded-md">Search</button>
                </form>
            </div>
        </div>
    );
};
export default GptBarSearch;