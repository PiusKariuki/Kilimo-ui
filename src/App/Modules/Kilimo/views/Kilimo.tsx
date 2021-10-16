import React from "react";

const userIcon = process.env.PUBLIC_URL + "/img/user.svg";
const powerIcon = process.env.PUBLIC_URL + "/img/power-button.png";

const Kilimo = (): JSX.Element => {
  return (
    <div className="h-screen  overflow-y-hidden">
      {/* .............Topbar......................... */}
      <nav
        className="flex w-full justify-start  h-10 bg-white
         text-gray-700 border-b-2 border-gray-200 z-10"
      ></nav>
      {/* .................content...................... */}
      <div className="grid grid-cols-12 gap-0 mt-0 h-full">
        {/* .................sidebar..spans 1/12 grid cols.................. /*/}
        <nav
          className="mx-auto hidden md:flex md:flex-col 
        md:justify-between md:col-span-1 border-r-2 "
        >
          <div className="justify-center mr-5">
            <a href="#fdfd" className="">
              <img src={userIcon} alt="" className="h-10 mb-5 mt-4" />
            </a>
            <a href="#hghg" className="">
              <img src={userIcon} alt="" className="h-10 mb-0" />
            </a>
          </div>

          <a href="#logout">
            <img src={powerIcon} alt="" className="h-6 my-7 mb-24  mr-1 ml-2" />
          </a>
        </nav>
        {/* .................................sidebar end.......................... */}
      </div>
    </div>
  );
};

export default Kilimo;
