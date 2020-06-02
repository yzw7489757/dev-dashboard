import React from "react";
import ReactDOM from "React-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Dashboard from "./layouts/dashboard";
import "./assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

export const MaterialSingle = (props) => {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={(p) => <Dashboard {...p} {...props} />} />
      </Switch>
    </Router>
  );
};

if (process.env.NODE_ENV === "development") {
  ReactDOM.render(
    <MaterialSingle routes={[]} />,
    document.getElementById("root")
  );
}

export default { MaterialSingle };
