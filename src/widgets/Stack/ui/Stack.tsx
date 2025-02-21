import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Stack.module.scss";

import HtmlSvg from "@/shared/assets/stack/html.svg";
import CssSvg from "@/shared/assets/stack/css.svg";
import JsSvg from "@/shared/assets/stack/js.svg";
import ReactSvg from "@/shared/assets/stack/react.svg";
import ReduxSvg from "@/shared/assets/stack/redux.svg";
import BootstrapSvg from "@/shared/assets/stack/bootstrap.svg";
import TailwindSvg from "@/shared/assets/stack/tailwind.svg";
import SassSvg from "@/shared/assets/stack/sass.svg";
import GitSvg from "@/shared/assets/stack/git.svg";
import GreensockSvg from "@/shared/assets/stack/greensock.svg";
import VscodeSvg from "@/shared/assets/stack/vscode.svg";
import GithubSvg from "@/shared/assets/stack/github.svg";
import { AppIcon } from "@/shared/ui/AppIcon/AppIcon";
import { ElementType } from "react";

const stackList = [
  HtmlSvg,
  CssSvg,
  JsSvg,
  ReactSvg,
  ReduxSvg,
  BootstrapSvg,
  TailwindSvg,
  SassSvg,
  GitSvg,
  GreensockSvg,
  VscodeSvg,
  GithubSvg,
];

export const Stack = () => {
  return (
    <section className={s.stack}>
      <AppText
        className={s.title}
        text="Tech Stack"
        title="h2"
        colorType="accented"
        textAlign="center"
      />
      <AppText
        className={s.subTitle}
        text=" Technologies I’ve been working with recently"
        title="h3"
        textAlign="center"
      />
      <div className={s.stackList}>
        {stackList.map((sItem) => (
          <AppIcon
            key={sItem}
            className={s.item}
            SVG={sItem as ElementType}
          />
        ))}
      </div>
    </section>
  );
};
