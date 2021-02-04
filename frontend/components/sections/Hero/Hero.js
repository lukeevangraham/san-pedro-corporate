import Markdown from "react-markdown";
import Button from "../../elements/UI/Button/Button"
import ButtonLink from "../../elements/button-link";
import Image from "../../elements/image";
import classNames from "classnames";
import { getButtonAppearance } from "utils/button";

import classes from "./Hero.module.css"

const Hero = ({ data, isHome }) => {
  return (
    <main className={classNames("container flex flex-col md:flex-row items-center justify-between py-4 sm:py-12", { "mb-6" : isHome })}>
      {/* Left column for content */}
      <div className="flex-1">
        {/* Hero section label */}
        <p className={classNames(classes.label, { [classes.lightText] : isHome })}>{data.label}</p>
        {/* Big title */}
        <h1 className={classNames("title mt-2 sm:mt-0", { [classes.lightText] : isHome } )}>{data.title}</h1>
        {/* Description paragraph */}
        <p className={classNames("sm:text-xl mb-4 sm:mb-6", { [classes.lightText] : isHome })}>{data.description}</p>
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
        <div className={classNames("md:text-sm mt-4 sm:mt-3 rich-text-hero", { [classes.lightText] : isHome })}>
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
