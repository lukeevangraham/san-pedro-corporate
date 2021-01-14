import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem sticky={props.sticky} link="/about">
      About Us
    </NavigationItem>
    <NavigationItem sticky={props.sticky} link="/about">
      Media
    </NavigationItem>
    <NavigationItem sticky={props.sticky} link="/about">
      Family
    </NavigationItem>
    <NavigationItem sticky={props.sticky} link="/about">
      Contact
    </NavigationItem>
    <NavigationItem sticky={props.sticky} link="/about">
      Give
    </NavigationItem>
  </ul>
);

export default navigationItems;
