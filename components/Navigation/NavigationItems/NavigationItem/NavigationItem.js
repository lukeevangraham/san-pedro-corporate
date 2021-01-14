import React from "react";
import Link from "next/link";

import classes from "./NavigationItem.module.css";

const navigationItem = (props) => {
  let attachedClasses = [
    classes.NavigationItem,
    props.sticky ? classes.sticky : null,
  ];
  return (
    <li className={attachedClasses.join(" ")}>
      <Link href={props.link}>
        <a>{props.children}</a>
      </Link>
    </li>
  );
};

export default navigationItem;
