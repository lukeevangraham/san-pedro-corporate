import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { buttonLinkPropTypes } from "utils/types";
import Link from "next/link";
import CustomLink from "../../custom-link";
import classes from "./Button.module.css";

const ButtonContent = ({ button, appearance, compact }) => {
  return (
    <div
      className={classNames(
      // Common classes
        classes.btn,
        // Full-size button
        {
          "px-8 py-4": compact === false,
        },
        // Compact button
        //{
        //  "px-6 py-2": compact === true,
        //},
        // Specific to when the button is fully dark
        {
          "bg-primary-600 text-white border-primary-600": appearance === "dark",
        },
        // Specific to when the button is dark outlines
        classes.btnGhost,
        //{
        //  "text-primary-600 border-primary-600": appearance === "dark-outline",
        //},
        // Specific to when the button is fully white
        {
          "bg-white text-primary-600 border-white": appearance === "white",
        },
        // Specific to when the button is white outlines
        {
          "text-white border-white": appearance === "white-outline",
        }
      )}
    >
      {button.text}
    </div>
  );
};

const Button = ({ button, appearance, compact = false }) => (
<CustomLink link={button}>
    {/* {console.log("BUTTON", button)}
    {console.log("APPEARANCE", appearance)}
    {console.log("COMPACT", compact)} */}
    <ButtonContent button={button} appearance={appearance} compact={compact} />
</CustomLink>
)

// const ButtonLink = ({ button, appearance, compact = false }) => {
//     return (
//       <CustomLink link={button}>
//         <ButtonContent button={button} appearance={appearance} compact={compact} />
//       </CustomLink>
//     );
//   };

Button.propTypes = {
    button: buttonLinkPropTypes,
    appearance: PropTypes.oneOf([
      "dark",
      "white-outline",
      "white",
      "dark-outline",
    ]),
    compact: PropTypes.bool,
  };

export default Button;