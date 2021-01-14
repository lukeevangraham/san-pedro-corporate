import React from "react";
import classes from "./Logo.module.css";
import Link from "next/link";

const Logo = (props) => {
  let attachedClasses = [classes.Logo, props.sticky ? classes.StickyLogo : classes.UnstickyLogo ]
  return (
  <div className={attachedClasses.join(" ")}>
    <Link href="/">
      <a>
        <img
          src="/images/san-pedro-logo.png"
          alt="San Pedro Presbyterian Church Logo"
        />
      </a>
    </Link>
  </div>
)}

export default Logo;