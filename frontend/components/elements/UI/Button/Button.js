import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { buttonLinkPropTypes } from "utils/types";
import Link from "next/link";
import CustomLink from "../../custom-link";
import classes from "./Button.module.css";

const ButtonContent = ({ button, appearance, compact }) => {
  const btnGhost = classes.btnGhost;

  return (
    <div
      className={classNames(
        // Common classes
        classes.btn,
        // Full-size button
        {
          /* {
          "px-8 py-4": compact === false,
        }, */
        },
        // Compact button
        //{
        //  "px-6 py-2": compact === true,
        //},
        // Specific to when the button is fully dark
        {
          [classes.btnFull]: appearance === "dark",
        },
        // Specific to when the button is dark outlines
        {
          [classes.btnGhost]: appearance === "dark-outline",
        },
        //{
        //  "text-primary-600 border-primary-600": appearance === "dark-outline",
        //},
        // Specific to when the button is fully white
        {
          [classes.btnWhite]: appearance === "white",
        },
        // Specific to when the button is white outlines
        {
          [classes.btnGhostWhite]: appearance === "white-outline",
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
);

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
