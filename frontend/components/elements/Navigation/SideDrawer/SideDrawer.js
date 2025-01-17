import PropTypes from "prop-types";
import { MdClose, MdChevronRight } from "react-icons/md";
import Image from "../../image";
import {
  mediaPropTypes,
  linkPropTypes,
  buttonLinkPropTypes,
} from "utils/types";
import ButtonLink from "../../button-link";
import Button from "../../UI/Button/Button"
import { useLockBodyScroll } from "utils/hooks";
import { getButtonAppearance } from "utils/button";
import CustomLink from "../../custom-link";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

const MobileNavMenu = ({ navbar, closeSelf, open }) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll();

  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <>
      <Backdrop show={open} clicked={closeSelf} />
      <div className={attachedClasses.join(" ")} onClick={closeSelf}>
        {/* <div className="w-screen h-screen fixed top-0 left-0 overflow-y-scroll bg-white z-10 pb-6"> */}
        {/* <div className="container h-full flex flex-col justify-between"> */}
        {/* Top section */}
        {/* <div className="flex flex-row justify-between py-2 items-center"> */}
        {/* Company logo */}
        <div className={classes.Logo}>
          <Image media={navbar.logo} className="h-16 w-auto object-contain" />
        </div>
        {/* Close button */}
        {/* <button onClick={closeSelf} className="py-1 px-1">
                <MdClose className="h-8 w-auto" />
              </button> */}
        {/* </div> */}
        {/* Bottom section */}
        {/* <div className="flex flex-col justify-end w-9/12 mx-auto"> */}
        {/* <ul className="flex flex-col list-none gap-6 items-baseline text-xl mb-10"> */}
        <NavigationItems links={navbar.links} sideDrawer={true} />
        {/* {navbar.links.map((navLink) => (
                  <li key={navLink.id} className="block w-full">
                    <CustomLink link={navLink}>
                      <div className="hover:text-gray-900 py-6 flex flex-row justify-between items-center">
                        <span>{navLink.text}</span>
                        <MdChevronRight className="h-8 w-auto" />
                      </div>
                    </CustomLink>
                  </li>
                ))} */}
        {/* </ul> */}
        <div style={{ margin: "1rem" }}></div>
        <Button
          button={navbar.button}
          appearance={getButtonAppearance(navbar.button.type, "light")}
        />
        {/* <ButtonLink
          button={navbar.button}
          appearance={getButtonAppearance(navbar.button.type, "light")}
        /> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

MobileNavMenu.propTypes = {
  navbar: PropTypes.shape({
    logo: mediaPropTypes,
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  closeSelf: PropTypes.func,
};

export default MobileNavMenu;
