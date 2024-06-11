import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm ,setIssignForm]=useState(true);
  const toggleSignInForm=()=>{
      setIssignForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="relative flex justify-center items-center h-screen">
        <img
          className="absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
        <div className="relative w-full   bg-black/80 max-w-80 mt-10">
          <form className="relativerounded-lg flex flex-col gap-4 p-6 text-white">
            <h1 className="font-bold text-xl mt-6 mx-4">{isSignInForm ?"Sign In ": "Sign Up" }</h1>
            <input
              type="text"
              placeholder="Email Address"
              className="p-3 mx-4 rounded-md border-gray-600 border-2 bg-gray-800/50"
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="p-3 mx-4 rounded-md border-gray-600 border-2 bg-gray-800/50"
            ></input>
            <button className="bg-red-700 my-4 mx-4 p-3 rounded-md font-bold">{isSignInForm ?"Sign In ": "Sign Up" }</button>
             <p className="font-bold text-center cursor-pointer">OR</p>
            <p onClick={toggleSignInForm} className="p-1 mx-4">{isSignInForm ?"New to Netflix? Sign Up Now": "Already registered? Sign In Now" }</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
