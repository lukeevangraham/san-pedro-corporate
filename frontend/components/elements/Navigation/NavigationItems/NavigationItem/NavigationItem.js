import React from "react";
import CustomLink from "@/components/elements/custom-link";
import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  let attachedClasses = [
    classes.NavigationItem,
    props.sticky ? classes.sticky : null,
  ];
  return (
    <li className={attachedClasses.join(" ")}>
      <CustomLink link={props.navLink}>
        <div>{props.navLink.text}</div>
      </CustomLink>
    </li>
  );
};

export default NavigationItem;
