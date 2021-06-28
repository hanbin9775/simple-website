import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Home from "views/home";
import Step1 from "views/step1";
import Step2 from "views/step2";
import Step3 from "views/step3";
import Step4 from "views/step4";
import Result from "views/result";

import "route-styles.css";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/step1", name: "Step1", Component: Step1 },
  { path: "/step2", name: "Step2", Component: Step2 },
  { path: "/step3", name: "Step3", Component: Step3 },
  { path: "/step4", name: "Step4", Component: Step4 },
  { path: "/result", name: "Result", Component: Result },
];

const AppRouter: React.FC = () => {
  const nodeRef = React.useRef(null);
  return (
    <>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              nodeRef={nodeRef}
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div
                ref={nodeRef}
                className="page"
                style={{ height: window.innerHeight }}
              >
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
