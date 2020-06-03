import React from "react";
import { Switch, Route , Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import DashBoard from './dashboard';

const hist = createBrowserHistory();

const MaterialSingle = (props) => {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={(p) => <DashBoard {...p} {...props} />} />
      </Switch>
    </Router>
  );
};

export default MaterialSingle;