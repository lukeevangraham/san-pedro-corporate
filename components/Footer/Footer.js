import React from "react";
import Link from "next/link";

import classes from "./Footer.module.css";

const Footer = (props) => (
  <footer className={classes.footer}>
    <div className="row">
      <div className="col span_6_of_12">
        <ul className={classes.footerNav}>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col span_6_of_12">
        <ul className={classes.socialLinks}>
          <li>
            <a href="https://www.facebook.com/rbcpcpreschool" target="_blank">
            <img src="/images/icons/logo-facebook.svg" alt="Facebook Logo"/>
            </a>
          </li>
        </ul>
      </div>
      <div className="row">
        <p className={classes.footerP}>
          Copyright &copy; {new Date().getFullYear()} by San Pedro Presbyterian
          Church. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
