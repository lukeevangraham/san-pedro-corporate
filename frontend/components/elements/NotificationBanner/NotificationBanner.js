import Markdown from "react-markdown";
import classNames from "classnames";
import { MdClose } from "react-icons/md";

import classes from "./NotificationBanner.module.css";

const NotificationBanner = ({ data: { text, type }, closeSelf }) => {
  return (
    <div
      className={classNames(
        // Common classes
        "text-white px-2 py-2",
        {
          // Apply theme based on notification type
          // "bg-primary": type === "info",
          [classes.info]: type === "info",
          "bg-secondary": type === "warning",
          "bg-secondary": type === "alert",
        }
      )}
    >
      <div className="container flex flex-row justify-between items-center ">
        <div className="rich-text-banner flex-1">
          <Markdown source={text} />
        </div>
        <button onClick={closeSelf} className="px-1 py-1 flex-shrink-0">
          <MdClose className="h-6 w-auto" color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default NotificationBanner;
