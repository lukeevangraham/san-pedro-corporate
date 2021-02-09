import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

import classes from "./Layout.module.css";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [makeNavSticky, setMakeNavSticky] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  console.log("props: ", props)

  return (
    <Aux>
      <Waypoint
        topOffset={"120px"}
        onLeave={() => setMakeNavSticky(true)}
        onEnter={() => setMakeNavSticky(false)}
      >
        <div
          className={classes.homeHeader}
          style={{
            backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.33),
      rgba(255, 255, 255, 0.33)
    ),
    url(https://sanpedroadmin.lukegraham.us${props.heroBg});`,
          }}
        >
          <Toolbar
            sticky={makeNavSticky}
            drawerToggleClicked={sideDrawerToggleHandler}
          />
        </div>
      </Waypoint>
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className={classes.Content}>{props.children}</main>
      <Footer />
    </Aux>
  );
};

export default Layout;
