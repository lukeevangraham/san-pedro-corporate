import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.css";

const NavigationItems = (props) => (
  <div>
    <ul className={[classes.DesktopOnly, classes.NavigationItems].join(" ")}>
      {props.links.map((navLink) => (
        <NavigationItem
          key={navLink.id}
          navLink={navLink}
          sticky={props.sticky}
        />
      ))}
    </ul>
  </div>
);

export default NavigationItems;
