import { useState } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
import PropTypes from "prop-types";
import { MdMenu } from "react-icons/md";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import MobileNavMenu from "../../mobile-nav-menu";
import Button from "../../UI/Button/Button";
import ButtonLink from "../../button-link";
import Image from "../../image";
import {
  mediaPropTypes,
  linkPropTypes,
  buttonLinkPropTypes,
} from "utils/types";
import { getButtonAppearance } from "utils/button";
import CustomLink from "../../custom-link";
import classes from "./navbar.module.css";

const Navbar = ({ navbar, sticky }) => {
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false);
  let attachedClasses = [classes.innerToolbar, "row"];
  const router = useRouter()

  return (
    <>
      {/* The actual navbar */}
      <nav className={sticky ? classes.Sticky : classes.Toolbar}>
        <div className={attachedClasses.join(" ")}>
          <div className={classes.Logo}>
            <Logo image={navbar.logo} sticky={sticky} />
            {/* <Link href="/[[...slug]]" as="/">
              <a>
                <Image
                  media={navbar.logo}
                  className="h-24 w-auto object-contain"
                />
              </a>
            </Link> */}
          </div>
          {/* List of links on desktop */}
          <NavigationItems links={navbar.links} sticky={sticky} />
          {/* <ul
            className={[classes.DesktopOnly, classes.NavigationItems].join(" ")}
          >
            {navbar.links.map((navLink) => (
              <li key={navLink.id}>
                <CustomLink link={navLink}>
                  <div>{navLink.text}</div>
                </CustomLink>
              </li>
            ))}
          </ul> */}
          {/* Hamburger menu on mobile */}
          <button
            onClick={() => setMobileMenuIsShown(true)}
            className="p-1 block md:hidden"
          >
            <MdMenu className="h-8 w-auto" />
          </button>
          {/* CTA button on desktop */}
          {navbar.button && (
            <div className="hidden md:block" style={{ marginLeft: "40px" }}>
              <Button
                button={navbar.button}
                appearance={getButtonAppearance(navbar.button.type, "light")}
                compact
              />
              {/* <ButtonLink
                button={navbar.button}
                appearance={getButtonAppearance(navbar.button.type, "light")}
                compact
              /> */}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile navigation menu panel */}
      {mobileMenuIsShown && (
        <MobileNavMenu
          navbar={navbar}
          closeSelf={() => setMobileMenuIsShown(false)}
        />
      )}
    </>
  );
};

Navbar.propTypes = {
  navbar: PropTypes.shape({
    logo: mediaPropTypes,
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
};

export default Navbar;
