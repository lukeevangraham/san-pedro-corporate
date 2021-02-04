import React, { cloneElement, isValidElement } from "react";
import { Waypoint } from "react-waypoint";
import Link from "next/link";
import ButtonLink from "./elements/button-link";
import HomeHeader from "../components/elements/HomeHeader/HomeHeader";
import Navbar from "./elements/Navigation/Navbar/navbar";
import Footer from "./elements/footer";
import NotificationBanner from "./elements/NotificationBanner/NotificationBanner";
import { useState } from "react";
import Sections from "../components/sections";

const Layout = ({ children, global }) => {
  const { navbar, footer, notificationBanner } = global;

  const [makeNavSticky, setMakeNavSticky] = useState(false);
  const [bannerIsShown, setBannerIsShown] = useState(true);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Aligned to the top */}
      <div className="flex-1">
        {notificationBanner && bannerIsShown && (
          <NotificationBanner
            data={notificationBanner}
            closeSelf={() => setBannerIsShown(false)}
          />
        )}

        <Waypoint
          onLeave={() => setMakeNavSticky(true)}
          onEnter={() => setMakeNavSticky(false)}
        >
          <div>
            {/* If home, show the contained Navbar and Hero */}
            {children.props.metadata ? (
              children.props.metadata.id === 2 ? (
                <HomeHeader bgImage={children.props.sections[0].picture.url}>
                  <Navbar navbar={navbar} sticky={makeNavSticky} homePath={true} />
                  {/* SHOW ONLY THE HERO (TOP OF HOME PAGE IN THE HEADER) */}
                  <Sections sections={[children.props.sections[0]]} calledFromLayout={true} />
                </HomeHeader>
              ) : (
                <Navbar navbar={navbar} sticky={makeNavSticky} homePath={false} />
              )
            ) : null}
          </div>
        </Waypoint>
        <>
          {/* THE HERO SECTION IS ELIMINATED IN THE SECTIONS FILE */}

          <div>{children}</div>
        </>
      </div>
      {/* Aligned to the bottom */}
      <Footer footer={footer} />
    </div>
  );
};

export default Layout;
