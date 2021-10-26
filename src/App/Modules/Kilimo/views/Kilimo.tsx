import React from "react";
import Footer from "../../../Common/Components/Footer";
import useDarkMode from "../../../Common/hooks/useDarkMode";
import { Route, Switch, Redirect } from "react-router-dom";
import kilimoRoutes from "../routes/Routes";

const lightIcon = process.env.PUBLIC_URL + "/img/light.png";

const Kilimo: React.FC = (): JSX.Element => {
  const { colorTheme, setTheme } = useDarkMode();


  return (
    <div className="flex flex-col ">
      <div className="fixed bottom-20 left-0 z-50">
        <button onClick={() => setTheme(colorTheme)}>
          <img src={lightIcon} alt="" className="h-10" />
        </button>
      </div>

      <div className="flex flex-col">
        <Switch>
          {kilimoRoutes.map((prop: any, key: any) => (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          ))}
          <Redirect from="/" to="/kilimo/dashboard" />
        </Switch>
      </div>


    </div>
  );
};

export default Kilimo;
