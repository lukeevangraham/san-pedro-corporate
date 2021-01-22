import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.css";

const NavigationItems = (props) => (
  <>
    <ul className={props.sideDrawer ? classes.NavigationItems : [classes.NavigationItems, classes.notSideDrawer].join(" ")}>
      {props.links.map((navLink) => (
        <NavigationItem
          key={navLink.id}
          navLink={navLink}
          sticky={props.sticky}
        />
      ))}
    </ul>
  </>
);

export default NavigationItems;
