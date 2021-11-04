import React from "react";
import SignUp from "../components/SignUp";

const rooster = `${process.env.PUBLIC_URL}/img/rooster.png`;

const Auth: React.FC = (): JSX.Element => {
  return (
    <div
      className="flex flex-row h-screen  md:w-full  overflow-hidden bg-cover 
                    bg-no-repeat bg-center relative"
      style={{
        background: `url('${process.env.PUBLIC_URL}/img/grassy.jpg')`,
      }}
    >
      <div
        className="flex flex-col w-full md:w-2/4  h-screen  z-40 bg-gray-200
       bg-opacity-70 justify-center"
      >
        <h1 className="leading-2 text-center text-3xl font-extrabold mt-20 xl:text-3xl 2xl:text-7xl">
          Kilimo Farm Management System
        </h1>
        <div className="w-full mt-20 z-50 ">
          <SignUp />
        </div>

        <div className="absolute max-w-0 md:max-w-md z-60 left-46">
          <img src={rooster} alt="" className="object-cover" />
        </div>

      </div>
    </div>
  );
};

export default Auth;
