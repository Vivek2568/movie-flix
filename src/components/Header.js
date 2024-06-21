import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import {toggleGptSearchView} from "../utils/gptSlice";
const Header = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const user = useSelector((store) => store.user);
    const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            
        });
    }
    useEffect(() => {
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email } = user;
                dispatch(addUser({ uid: uid, email: email }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        return ()=> unsubscribe();
    }, []);
    const handleGptSearchClick=()=>{
        dispatch(toggleGptSearchView());
    }
    return (
        <div className="absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-40 "
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo" />
            {user && <div className="flex align-baseline p-2 gap-1">
                <button className="py-2 px-3 mx-4 mb-4 bg-purple-800 font-bold text-white rounded-md" 
                onClick={handleGptSearchClick} >{showGptSearch ?"Homepage" : "Gpt Search"}</button>
                <img className="w-8 h-10 rounded-sm" src="https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
                    alt="user-icon"></img>
                <button onClick={handleSignOut} className="font-bold text-white pb-4">(Sign Out)</button>
            </div>}
        </div>

    )
}
export default Header;