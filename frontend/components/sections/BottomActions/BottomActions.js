import ButtonLink from "@/components/elements/button-link";
import Button from "@/components/elements/UI/Button/Button"
import { getButtonAppearance } from "utils/button";

import classNames from "classnames";
import classes from "./BottomActions.module.css";

const BottomActions = ({ data }) => {
  return (
    <section className={classNames(classes.sectionBg, "py-20 text-center")}>
      <h2 className="title text-white mb-10">{data.title}</h2>
      {/* Buttons row */}
      <div className="container flex flex-row justify-center flex-wrap gap-4">
        {data.buttons.map((button) => (
          <Button
            button={button}
            appearance={getButtonAppearance(button.type, "dark")}
            key={button.id}
          />
          // <ButtonLink
          //   button={button}
          //   appearance={getButtonAppearance(button.type, "dark")}
          //   key={button.id}
          // />
        ))}
      </div>
    </section>
  );
};

export default BottomActions;
