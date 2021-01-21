import React, { cloneElement, isValidElement } from "react";
import Link from "next/link";
import ButtonLink from "./elements/button-link";
import HomeHeader from "../components/elements/HomeHeader/HomeHeader";
import Navbar from "./elements/Navigation/Navbar/navbar";
import Footer from "./elements/footer";
import NotificationBanner from "./elements/notification-banner";
import { useState } from "react";
import Sections from "../components/sections";

const Layout = ({ children, global }) => {
  const { navbar, footer, notificationBanner } = global;

  const [bannerIsShown, setBannerIsShown] = useState(true);

  let heroChild = global.Hero;

  heroChild.__component = "sections.hero";

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

        {/* If home, show the contained Navbar and Hero */}
        {children.props.metadata.id === 2 ? (
          <HomeHeader>
            <Navbar navbar={navbar} />
            {/* SHOW ONLY THE HERO (TOP OF HOME PAGE IN THE HEADER) */}
            <Sections sections={[children.props.sections[0]]} />
          </HomeHeader>
        ) : (
          <Navbar navbar={navbar} />
        )}
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
