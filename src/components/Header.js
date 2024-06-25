import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { setDataNull, toggleGptSearchView } from "../utils/gptSlice";
import { FaSearch } from "react-icons/fa";
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            // Handle error
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email } = user;
                dispatch(addUser({ uid: uid, email: email }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => unsubscribe();
    }, []);

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
        dispatch(setDataNull());
    }

    return (
        <div className="absolute w-screen px-4 bg-gradient-to-b from-black z-10 flex justify-between items-center sm:px-8">
            <img className="w-16 sm:w-40" 
                src="https://github.com/Krishan-Kant123/flicx/blob/main/src/assets/t.png?raw=true"
                alt="logo" />
            {user && <div className=" flex items-center gap-2 sm:gap-4">
                <button className=" my-1 px-2 sm:py-2 sm:px-3 bg-red-600 font-bold text-white rounded-md flex animate-bounce" 
                onClick={handleGptSearchClick}> {<FaSearch className="my-1 mx-2"/>} {showGptSearch ? "Homepage" : "Dive in with AI"}</button>
                <img className="w-4 h-5 sm:w-8 sm:h-10 rounded-sm" src="https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
                    alt="user-icon"></img>
                <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
            </div>}
        </div>
    )
}

export default Header;
