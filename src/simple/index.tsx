import React, { useMemo } from "react"
import {
  BrowserRouter,
  HashRouter,
  NavLink,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import defaultLogo from "./logo.svg"
import Layout from "./layout"
import "./index.less"

type RouteItemProps = {
  name: string
  icon: React.ReactNode
  path: string
  component: React.FunctionComponent | React.ComponentClass
}

export type SimpleProps = {
  useHash?: boolean
  basePath?: string
  title?: string
  routes: Array<RouteItemProps>
  logo?: React.ReactNode
}

const Simple: React.FC<SimpleProps> = props => {
  const { title, logo, routes = [], useHash = false, basePath = "" } = props

  const Router = useMemo(() => (useHash ? HashRouter : BrowserRouter), [
    useHash
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ]) as any

  return (
    <div className="simple simple-layout">
      <Router basename={basePath || "/"}>
        <div className="simple-sidebar">
          <div>
            <NavLink to="/" className="simple-sidebar-header">
              {logo ? (
                <div
                  className="simple-logo"
                  style={
                    typeof logo === "string"
                      ? { backgroundImage: `url(${logo})` }
                      : {}
                  }
                >
                  {typeof logo !== "string" ? logo : ""}
                </div>
              ) : (
                <img className="simple-logo" src={defaultLogo} alt="" />
              )}
              <p>{title || "Development"}</p>
            </NavLink>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              {routes.map(({ path, icon: Icon, name }) => (
                <li className="nav-item" key={path}>
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to={path}
                  >
                    {React.isValidElement(Icon)
                      ? React.cloneElement(Icon, { className: "simple-icon" })
                      : Icon || null}
                    <p>{name}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-background" />
        </div>
        <div className="content">
          <Switch>
            {routes.map(({ path, name, component: Com }) => (
              <Route
                path={path}
                key={path}
                exact
                render={innerProps => (
                  <Layout title={name}>
                    <Com {...props} {...innerProps} />
                  </Layout>
                )}
              />
            ))}
            <Redirect to={routes[0].path || "/"} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default Simple
