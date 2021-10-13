import React from "react";
import SignUp from "../components/SignUp";

const iconPath = process.env.PUBLIC_URL + "/img/";

const Landing = (): JSX.Element => {
  return (
    <div
      className="flex flex-col h-screen  md:w-full   bg-no-repeat bg-cover bg-center"
      style={{
        background: `url('${process.env.PUBLIC_URL}/img/wheat.jpg')`,
      }}
    >
      {/* ....................................content div................................... */}
      {/* ..........logo div.............. */}
      <div className="grid justify-items-center mb-20 mt-4">
        <img
          className="fill-current w-10 h-10 "
          src={`${iconPath}logo.svg`}
          alt="logo"
        />
      </div>
      {/* ...........heading div... */}
      <div className="mx-0 mb-12">
        <h1 className="leading-2 text-center text-3xl font-extrabold">
          Kilimo Farm Management System
        </h1>
      </div>

      {/* ..............sign up forms..................... */}
      <div className="sm:mx-80 bg-gray-200 rounded-3xl">
        <SignUp />
      </div>
    </div>
  );
};

export default Landing;
