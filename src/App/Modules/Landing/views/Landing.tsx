import React from "react";
import SignUp from "../components/SignUp";

const iconPath = process.env.PUBLIC_URL + "/img/";

const Landing = (): JSX.Element => {
  return (
    <div className="flex flex-row-reverse ">
      {/*........................ bg div................................................... */}
      <div
        style={{
          background: `url('${process.env.PUBLIC_URL}/img/chicken.jpg')`,
        }}
        className="h-screen  md:w-full   bg-no-repeat bg-cover bg-center"
      ></div>
      {/* ....................................content div................................... */}
      <div className="w-full flex flex-col bg-gradient-radial from-green-300 via-blue-500 to-purple-600">
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
            Kilimo Admin Panel
          </h1>
        </div>

        {/* ..............sign up forms..................... */}
        <div className="md:mx-20">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Landing;
