import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Home from "views/home";
import Input from "views/input";

import "route-styles.css";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/input", name: "Input", Component: Input },
];

const AppRouter: React.FC = () => {
  return (
    <>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div>
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </>
  );
};

export default AppRouter;
