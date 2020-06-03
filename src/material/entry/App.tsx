import React from "react";
import { Switch, Route , Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import DashBoard from './dashboard';

const hist = createBrowserHistory();
export type MaterialSingleProps = {
  routes: {
    path: string,
    name: string,
    icon: React.ReactNode,
    component: React.ReactNode
  }[],
  title?: React.ReactNode,
  logo?: React.ReactNode,

  [key: string]: any;
}

const MaterialSingle = (props: MaterialSingleProps) => {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={(p) => <DashBoard {...p} {...props} />} />
      </Switch>
    </Router>
  );
};

export default MaterialSingle;