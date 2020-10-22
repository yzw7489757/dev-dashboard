import React from "react";
import { Switch, Route , HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import DashBoard from './dashboard';

export type MaterialSingleProps = {
  routes: {
    path: string,
    name: string,
    icon: React.ReactNode,
    component: React.ReactNode
  }[],
  title?: React.ReactNode,
  logo?: React.ReactNode,
  basePath?: string,

  [key: string]: any;
}

const MaterialSingle = (props: MaterialSingleProps) => {

  const hist = React.useMemo(() => createBrowserHistory({
    basename: `/${props.basePath || ''}`
  }), [])

  return (
    <HashRouter basename={`/${props.basePath || ''}`}>
      <Switch>
        <Route path="/" component={(p) => <DashBoard {...p} {...props} />} />
      </Switch>
    </HashRouter>
  );
};

export default MaterialSingle;