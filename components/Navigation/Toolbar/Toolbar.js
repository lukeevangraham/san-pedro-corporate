import React from "react";

import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  let attachedClasses = [classes.innerToolbar, "row"];
  return (
    <header className={props.sticky ? classes.Sticky : classes.Toolbar}>
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <DrawerToggle
          sticky={props.sticky}
          clicked={props.drawerToggleClicked}
        />
        <nav className={classes.DesktopOnly}>
          <NavigationItems sticky={props.sticky} />
        </nav>
      </div>
    </header>
  );
};

export default Toolbar;
