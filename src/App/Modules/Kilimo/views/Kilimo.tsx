import React, { useState } from "react";
import useDarkMode from "../../../Common/hooks/useDarkMode";
import { Route, Switch, Redirect } from "react-router-dom";
import kilimoRoutes from "../routes/Routes";

const Kilimo: React.FC = (): JSX.Element => {
  const { colorTheme, setTheme } = useDarkMode();

  return (
    <div className="mx-4 bg relative o">
      <div className="fixed bottom-20 left-0 z-50 md:ml-6 rounded-full border group">
        <div
          className="absolute h-4 w-4 bg-purple-400 
        dark:bg-gray-200 rounded-full right"
        ></div>
        {/* <p className="text-base group-hover:flex group-hover:w-32">
          Flip the switch😀
        </p> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-8 md:w-8 text-purple-500 dark:text-gray-100 m-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setTheme(colorTheme)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
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
