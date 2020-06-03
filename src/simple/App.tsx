import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import './index.less';

type RouteItemProps = {
  label: string,
  icon: React.ReactNode,
  path: string,
  App: React.FunctionComponent | React.ComponentClass
}
export type SimpleProps = { title?: string, routes: Array<RouteItemProps> }
const Simple: React.SFC<SimpleProps> = ({ title, routes = [] }) => {
  return (
    <div className="layout">
      <Router>
        <div className="sidebar">
          <div className="logo">
            <a href="/" className="simple-text logo-normal">
              {title || 'Development'}
            </a>
          </div>
          <div className="sidebar-wrapper" >
            <ul className="nav">
              {
                routes.map(item => (
                  <li className="nav-item"  key={item.path}>
                    <NavLink className="nav-link" activeClassName='active' to={item.path}>
                      <i className="nav-icon">{item.icon}</i>
                      <p>{item.label}</p>
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="sidebar-background" />
        </div>
        <div className="content">
          <Switch>
            {
              routes.map(({ path, App }) => (
                <Route path={path} key={path}>
                  <App />
                </Route>
              ))
            }
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default Simple