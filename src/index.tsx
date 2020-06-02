import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Dashboard from "./layouts/dashboard";
import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

type IMaterialSingle = {
  routes: {
    path: string,
    name: string,
    icon: React.ReactNode,
    component: React.ReactNode
  }[],
  title?: React.ReactNode,
  logo?: React.ReactNode
}

export const MaterialSingle:React.SFC<IMaterialSingle> = (props) => {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={(p) => <Dashboard {...p} {...props} />} />
      </Switch>
    </Router>
  );
};

export default { MaterialSingle };
