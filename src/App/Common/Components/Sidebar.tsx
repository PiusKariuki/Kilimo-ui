import React from "react";
import { Route, Switch, Redirect } from "react-router";
const powerIcon = process.env.PUBLIC_URL + "/img/power-button.png";

interface Props {
  routes: any;
  hidden: boolean;
}

const Sidebar: React.FC<{
  hidden: Props["hidden"];
  routes: Props["routes"];
}> = ({ hidden, routes }): JSX.Element => {
    console.log(routes);
    
  return (
    <nav
      className={` pl-6 ${
        hidden ? "hidden" : "flex"} md:flex flex-col h-full 
        border-r-2 borders justify-between  borders  fixed  left-0 top-9 bg-cards`}
    >
      <div className="justify-center mr-5">
        <Switch>
          {routes.map((prop: any, key: any) =>
              <Route
                // path={(prop.path && prop.layout + prop.path) || prop.layout}
                component={prop.component}
                key={key}
              >
                  <p>{prop.name}</p>
              </Route>
            )}
          <Redirect from="/" to="/kilimo" />
        </Switch>
      </div>

      <div className="justify-center mr-5">
        <a href="#logout">
          <img src={powerIcon} alt="" className="h-6 my-7 mb-24  mr-1 ml-2" />
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
