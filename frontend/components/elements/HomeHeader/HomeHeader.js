import React from "react";
import classes from "./HomeHeader.module.css";

const HomeHeader = (props) => <div className={classes.header}>{props.children}</div>;

export default HomeHeader;
