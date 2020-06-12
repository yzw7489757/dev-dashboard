import React from "react";
import { Switch, Route } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles } from "@material-ui/core/styles";

import styles from "material@assets/jss/material-dashboard-react/layouts/dashboardStyle.js";
import Navbar from "material@components/Navbars/Navbar.js";
import Footer from "material@components/Footer/Footer.js";
import Sidebar from "material@components/Sidebar/Sidebar.js";
import FixedPlugin from "material@components/FixedPlugin/FixedPlugin.js";
import 'material@assets/css/material-dashboard-react.css';

let ps;

const getLocalStroage = (name) => localStorage.getItem('dashboard' + name)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Dashboard = ({ classes, routes = [], logo, title, showFooter = false, ...rest }) => {
  const mainPanel = React.createRef();
  const [image, setImage] = React.useState(
    getLocalStroage('image') || "https://staticfile-1254003462.cos.ap-chengdu.myqcloud.com/sidebar-1.jpg"
  );
  const [color, setColor] = React.useState(getLocalStroage('color') ||"blue");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleFixedClick = React.useCallback(() => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  }, [fixedClasses]);

  const handleDrawerToggle = React.useCallback(() => {
    setMobileOpen(pre => !pre);
  }, []);

  const resizeFunction = React.useCallback(() => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  }, [window.innerWidth]);

  const handleImageClick = React.useCallback((img) => {
    setImage(img)
    localStorage.setItem('dashboard-image', img)
  },[])

  const handleColorClick = React.useCallback((cr) => {
    setColor(cr)
    localStorage.setItem('dashboard-color', cr)
  },[])
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    return () => {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={title || "Development"}
        logo={logo || "https://staticfile-1254003462.cos.ap-chengdu.myqcloud.com/logo.png"}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        <div className={classes.content}>
          <div className={classes.container}>
            <Switch>
              {routes.map((prop, key) => (
                <Route path={prop.path} component={prop.component} key={key} />
              ))}
            </Switch>
          </div>
        </div>
        { showFooter && <Footer /> }
        <FixedPlugin
          handleImageClick={handleImageClick}
          handleColorClick={handleColorClick}
          bgColor={color}
          bgImage={image}
          handleFixedClick={handleFixedClick}
          fixedClasses={fixedClasses}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(Dashboard);
