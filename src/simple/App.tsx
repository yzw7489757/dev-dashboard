import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import './index.less';

type RouteItemProps = {
  name: string,
  icon: React.ReactNode,
  path: string,
  component: React.FunctionComponent | React.ComponentClass
}

const _img = "https://staticfile-1254003462.cos.ap-chengdu.myqcloud.com/sidebar-1.jpg"

export type SimpleProps = { basePath?: string, title?: string, routes: Array<RouteItemProps>, logo?: React.ReactNode  }
const Simple: React.SFC<SimpleProps> = (props) => {
  const { title,logo = _img, routes = [], basePath='' } = props
  return (
    <div className="simple simple-layout">
      <Router basename={`/${basePath}`}>
        <div className="simple-sidebar">
          <div>
            <NavLink to="/" className="simple-sidebar-header">
              <div className="simple-logo" style={typeof logo === "string" ? { backgroundImage: `url(${logo})`} : {}}>{typeof logo !== 'string' ? logo : ''}</div> 
              <p>{title || 'Development'}</p>
            </NavLink>
          </div>
          <div className="sidebar-wrapper" >
            <ul className="nav">
              {
                routes.map(({path, icon: Icon, name}) => (
                  <li className="nav-item"  key={path}>
                    <NavLink className="nav-link" activeClassName='active' to={path}>
                      { 
                       typeof Icon === 'function' || typeof Icon === 'object' ?  React.createElement(Icon as any, { className: 'simple-icon'})  : null
                      }
                      <p>{name}</p>
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
              routes.map(({ path, component: Com }) => (
                <Route path={path} key={path}>
                  <Com {...props} />
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