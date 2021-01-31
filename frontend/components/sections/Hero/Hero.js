import Markdown from "react-markdown";
import Button from "../../elements/UI/Button/Button"
import ButtonLink from "../../elements/button-link";
import Image from "../../elements/image";
import { getButtonAppearance } from "utils/button";

import classes from "./Hero.module.css"

const Hero = ({ data }) => {
  return (
    <main className="container flex flex-col md:flex-row items-center justify-between py-12">
      {/* Left column for content */}
      <div className="flex-1 sm:pr-8">
        {/* Hero section label */}
        <p className={classes.label}>{data.label}</p>
        {/* Big title */}
        <h1 className="title mt-2 sm:mt-0 mb-4 sm:mb-2">{data.title}</h1>
        {/* Description paragraph */}
        <p className="text-xl mb-6 text-white">{data.description}</p>
        {/* Buttons row */}
        <div className="flex flex-row flex-wrap gap-4">
            {/* <ButtonLink
              button={button}
              appearance={getButtonAppearance(button.type, "light")}
              key={button.id}
            /> */}
          {data.buttons.map((button) => (
            <Button
              button={button}
              appearance={getButtonAppearance(button.type, "light")}
              key={button.id}
            />
          ))}
        </div>
        {/* Small rich text */}
        <div className="text-base md:text-sm mt-4 sm:mt-3 rich-text-hero text-white">
          <Markdown source={data.smallTextWithLink} />
        </div>
      </div>
      {/* Right column for the image */}
      {/* <Image
        media={data.picture}
        className="flex-shrink-0 object-contain w-full md:w-6/12 mt-6 md:mt-0"
      /> */}
    </main>
  );
};

export default Hero;
