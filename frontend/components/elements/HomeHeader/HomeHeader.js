import React from "react";
import classes from "./HomeHeader.module.css";

const HomeHeader = (props) => (
  <div
    className={classes.header}
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), url('http://sanpedroadmin.lukegraham.us${props.bgImage}')`,
    }}
  >
    {props.children}
  </div>
);

export default HomeHeader;
