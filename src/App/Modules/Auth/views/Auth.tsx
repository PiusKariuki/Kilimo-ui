import React from "react";
import SignUp from "../components/SignUp";

const rooster = `${process.env.PUBLIC_URL}/img/rooster.png`;

const Auth: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col h-screen  md:w-full relative overflow-hidden">
      <div
        className="absolute bg-cover  w-screen h-screen bg-no-repeat bg-center"
        style={{
          background: `url('${process.env.PUBLIC_URL}/img/grassy.jpg')`,
        }}
      ></div>
           <div className="absolute  left-50 -top-44 backdrop-filter-none">
          <img src={rooster} alt="" className="object-cover" />
        </div>

      <div
        className="flex flex-col w-full md:w-2/4  h-screen  z-40 bg-gray-200
       bg-opacity-80"
      >
        <h1 className="leading-2 text-center text-3xl font-extrabold mt-28">
          Kilimo Farm Management System
        </h1>
        <SignUp />

   
      </div>
    </div>
  );
};

export default Auth;
