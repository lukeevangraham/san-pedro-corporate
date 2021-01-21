import React from "react";
import classes from "./Logo.module.css";
import Link from "next/link";
import Image from "../image";

const Logo = (props) => {
  let attachedClasses = [
    classes.Logo,
    props.sticky ? classes.StickyLogo : classes.UnstickyLogo,
  ];
  return (
    <div className={attachedClasses.join(" ")}>
      <Link href="/[[...slug]]" as="/">
        <a>
          <Image media={props.image} />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
