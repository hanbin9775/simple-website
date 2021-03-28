import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Home from "views/home";
import Step1 from "views/step1";

import "route-styles.css";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/step1", name: "Step1", Component: Step1 },
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
              <div className="page" style={{ height: window.innerHeight }}>
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
