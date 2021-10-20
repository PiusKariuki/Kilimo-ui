import React, { useState } from "react";
import Footer from "../../../Common/Components/Footer";
import useDarkMode from "../../../Common/hooks/useDarkMode";
import Content from "../components/Content";

const userIcon = process.env.PUBLIC_URL + "/img/user.svg";
const powerIcon = process.env.PUBLIC_URL + "/img/power-button.png";
const lightIcon = process.env.PUBLIC_URL + "/img/light.png";
const hamIcon = process.env.PUBLIC_URL + "/img/ham.png";

const Kilimo: React.FC = (): JSX.Element => {
  const { colorTheme, setTheme } = useDarkMode();

  const [hidden, setHidden] = useState(false);

  return (
    <div className="overflow-y-auto">
      {/* .............Topbar......................... */}
      <nav
        className="flex w-full justify-between  h-10 z-10 border-b-2   dark:border-gray-900 border-lime-900
        fixed top-0 bg-cards"
      >
        <button onClick={() => setHidden(!hidden)}>
          <img src={hamIcon} alt="" className="md:hidden   h-full ml-8 py-1 " />
        </button>
        <button onClick={() => setTheme(colorTheme)}>
          <img src={lightIcon} alt="" className="h-full mr-4 ml-2" />
        </button>
      </nav>

      {/* .................sidebar................... /*/}
      <nav
        className={`pl-6 ${
          hidden ? "hidden" : "flex"
        } md:flex flex-col h-full 
        border-r-2 dark:border-gray-900 border-lime-900
        justify-between  borders  fixed  left-0 top-9 bg-cards`}
      >
        <div className="justify-center mr-5">
          <a href="#fdfd" className="">
            <img src={userIcon} alt="" className="h-10 mb-5 mt-4" />
          </a>
          <a href="#hghg" className="">
            <img src={userIcon} alt="" className="h-10 mb-0" />
          </a>
        </div>

        <div className="justify-center mr-5">
          <a href="#logout">
            <img src={powerIcon} alt="" className="h-6 my-7 mb-24  mr-1 ml-2" />
          </a>
        </div>
      </nav>
      {/* .................................sidebar end.......................... */}
      {/* ...............................content div.............................*/}
      <div className="flex flex-col h-screen w-full justify-between ">
        <div className="md:ml-20 mt-12">
          <Content />
        </div>
        <div className="md:ml-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Kilimo;
