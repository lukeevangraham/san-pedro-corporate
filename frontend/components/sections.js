import { useRouter } from "next/router";
import Hero from "@/components/sections/Hero/Hero";
import LargeVideo from "@/components/sections/large-video";
import FeatureColumnsGroup from "@/components/sections/feature-columns-group";
import FeatureRowsGroup from "@/components/sections/feature-rows-group";
import BottomActions from "@/components/sections/BottomActions/BottomActions";
import TestimonialsGroup from "@/components/sections/testimonials-group";
import RichText from "./sections/rich-text";
import Pricing from "./sections/pricing";
import TopNews from "@/components/sections/TopNews/TopNews"

import classNames from "classnames";

// Map Strapi sections to section components
const sectionComponents = {
  "sections.hero": Hero,
  "sections.large-video": LargeVideo,
  "sections.feature-columns-group": FeatureColumnsGroup,
  "sections.feature-rows-group": FeatureRowsGroup,
  "sections.bottom-actions": BottomActions,
  "sections.testimonials-group": TestimonialsGroup,
  "sections.rich-text": RichText,
  "sections.pricing": Pricing,
  "sections.top-news": TopNews
};

// Display a section individually
const Section = ({ sectionData, isHome }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  }

  // Display the section
  return <SectionComponent data={sectionData} isHome={isHome} />;
};

const PreviewModeBanner = () => {
  const router = useRouter();
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
    router.asPath
  )}`;

  return (
    <div className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
      <div className="container">
        Preview mode is on.{" "}
        <a
          className="underline"
          href={`/api/exit-preview?redirect=${router.asPath}`}
        >
          Turn off
        </a>
      </div>
    </div>
  );
};

// Display the list of sections
const Sections = ({ sections, preview, isHome, calledFromLayout }) => {
  return (
    // Stretch height if on the home page
    <div
      className={classNames("flex flex-col", {
        "h-full justify-center":
          sections.length <= 1 && sections[0].__component === "sections.hero",
      })}
    >
      {/* Show a banner if preview mode is on */}
      {preview && <PreviewModeBanner />}
      {/* Show the actual sections */}
      {/* DONT SHOW THE HERO SECTION IF IT'S FIRST (SINCE THE LAYOUT RENDERS IT ALREADY ) */}
      {/* {sections.length > 1 && sections[0].__component === "sections.hero" */}
      {calledFromLayout
        ? sections
            .filter((section, index) => index === 0)
            .map((section) => (
              <Section
                isHome={true}
                sectionData={section}
                key={`${section.__component}${section.id}`}
              />
            ))
        : sections.map((section) => (
            <Section
              isHome={isHome}
              sectionData={section}
              key={`${section.__component}${section.id}`}
            />
          ))}
      {/* THE ORIGINAL CODE IS BELOW */}
      {/* {sections.map((section) => (
        <Section
          sectionData={section}
          key={`${section.__component}${section.id}`}
        />
      ))} */}
    </div>
  );
};

export default Sections;
