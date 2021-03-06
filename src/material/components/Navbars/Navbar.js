import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core material@components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core material@components
import Button from "material@components/CustomButtons/Button.js";
import styles from "material@assets/jss/material-dashboard-react/components/headerStyle.js";

import AdminNavbarLinks from "./AdminNavbarLinks.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();

  const makeBrand = React.useCallback(()=> {
    var name;
    props.routes.map((prop) => {
      if (window.location.href.indexOf(prop.path) !== -1) {
        name = prop.name;
      }
      return null;
    });
    return name;
  }, [props.routes, window.location.href])

  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color,
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <Button color="transparent" href="#" className={classes.title}>
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <AdminNavbarLinks />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger", '']),
  handleDrawerToggle: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
Header.defaultProps = {
  color: '',
};
