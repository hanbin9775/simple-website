import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "views/home";
import Input from "views/input";

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/input" component={Input} />
      <Redirect path="*" to="/" />
    </Switch>
  );
};

export default AppRouter;
