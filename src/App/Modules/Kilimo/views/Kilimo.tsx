import React, { useState } from "react";
import Footer from "../../../Common/Components/Footer";
import Sidebar from "../../../Common/Components/Sidebar";
import useDarkMode from "../../../Common/hooks/useDarkMode";
import Content from "../components/Content";
import kilimoRoutes from "../routes/Routes";


const lightIcon = process.env.PUBLIC_URL + "/img/light.png";
const hamIcon = process.env.PUBLIC_URL + "/img/ham.png";

const Kilimo: React.FC = (): JSX.Element => {
  const { colorTheme, setTheme } = useDarkMode();

  const [hidden, setHidden] = useState(false);

  return (
    <div className="overflow-y-auto">
      {/* .............Topbar......................... */}
      <nav
        className="flex w-full justify-between  h-10 z-10 border-b-2   
        borders fixed top-0 bg-cards"
      >
        <button onClick={() => setHidden(!hidden)}>
          <img src={hamIcon} alt="" className="md:hidden   h-full ml-8 py-1 " />
        </button>
        <button onClick={() => setTheme(colorTheme)}>
          <img src={lightIcon} alt="" className="h-full mr-4 ml-2" />
        </button>
      </nav>

      {/* .................sidebar................... /*/}
      <div className="">
        <Sidebar hidden={hidden} routes={kilimoRoutes} />
      </div>
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
