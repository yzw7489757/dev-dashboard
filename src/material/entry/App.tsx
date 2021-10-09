import React from "react"
import { Switch, Route, BrowserRouter, HashRouter } from "react-router-dom"
import DashBoard from "./dashboard"

export type MaterialSingleProps = {
  routes: {
    path: string
    name: string
    icon: React.ReactNode
    component: React.ComponentType<any>
  }[]
  title?: React.ReactNode
  logo?: React.ReactNode
  basePath?: string;
  useHash?: boolean;

  [key: string]: any
}

const MaterialSingle = (props: MaterialSingleProps) => {
  const Router = React.useMemo(
    () => (props.useHash ? HashRouter : BrowserRouter),
    [props.useHash]
  ) as any;

  return (
    <Router basename={`/${props.basePath || ""}`}>
      <Switch>
        <Route path="/" component={p => <DashBoard {...p} {...props} />} />
      </Switch>
    </Router>
  )
}

export default MaterialSingle
