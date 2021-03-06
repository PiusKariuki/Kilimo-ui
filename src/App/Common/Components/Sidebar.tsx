import React from "react";
import { Link } from "react-router-dom";
const powerIcon = process.env.PUBLIC_URL + "/img/power-button.png";

interface Props {
  routes: any;
  hidden: boolean;
  setHidden: Function;
}

const Sidebar: React.FC<{
  hidden: Props["hidden"];
  routes: Props["routes"];
  setHidden: Props["setHidden"];
}> = ({ hidden, routes, setHidden }): JSX.Element => {
  return (
    <>
      <nav
        className={` pl-6 ${hidden ? "hidden" : "flex"} md:flex flex-col h-full 
        border-r-2 borders justify-between  borders  fixed left-0 top-9 bg-cards z-10 mt-1`}
      >
        <div className="justify-center mr-5">
          {routes.map((route: any, key: number) => (
            <Link
              to={{ pathname: `${route.layout}${route.path}` }}
              key={key}
              onClick={() => setHidden(true)}
            >
              <img src={route.icon} alt="icon" className="h-10 my-6" />
            </Link>
          ))}
        </div>

        <div className="justify-center mr-5">
          <a href="#logout">
            <img src={powerIcon} alt="" className="h-6 my-7 mb-24  mr-1 ml-2" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
