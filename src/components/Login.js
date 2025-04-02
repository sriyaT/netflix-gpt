import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg"
          alt="bc-img"
        />
      </div>
      <form className="w-3/12  absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-2 my-4 w-full bg-gray-800 rounded-sm"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-2 my-4 w-full bg-gray-800 rounded-sm"
          type="text"
          placeholder="Email Address"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-800 rounded-sm"
        />
        <button className="p-2 my-6 bg-red-700 w-full rounded-sm ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered,  Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
