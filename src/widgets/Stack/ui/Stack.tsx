import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Stack.module.scss";
import HtmlSvg from "@/shared/assets/stack/html.svg";
import CssSvg from "@/shared/assets/stack/css.svg";
import JsSvg from "@/shared/assets/stack/js.svg";
import ReactSvg from "@/shared/assets/stack/react.svg";

export const Stack = () => {
  return (
    <div className={s.stack}>
      <AppText
        text="My Tech Stack"
        title="h2"
      />
      <AppText
        text=" Technologies I’ve been working with recently"
        title="h3"
      />
      <div className={s.stackList}>
        <HtmlSvg />
        <CssSvg />
        <JsSvg />
        <ReactSvg />
      </div>
    </div>
  );
};
