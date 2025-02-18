import s from "./AppText.module.scss";
import cn from "classnames";
type AppTextTitleVariant = "h1" | "h2" | "h3" | "h4";
type AppTextColorType = "primary" | "secodary" | "accented"|"gradient";

type XSizeText =
  | "fontXs"
  | "fontS"
  | "fontM"
  | "fontL"
  | "fontXl"
  | "font2xl"
  | "font3xl"
  | "font4xl";
type SizeText = 14 | 16 | 20 | 28 | 32 | 40 | 48 | 56;
interface AppTextProps {
  className?: string;
  text: string;
  title?: AppTextTitleVariant;
  colorType?: AppTextColorType;
  sizeText?: SizeText;
}

export const AppText = ({
  text,
  colorType = "primary",
  title,
  sizeText = 20,
  className,
}: AppTextProps) => {
  const mapSizeText: Record<SizeText, XSizeText> = {
    14: "fontXs",
    16: "fontS",
    20: "fontM",
    28: "fontL",
    32: "fontXl",
    40: "font2xl",
    48: "font3xl",
    56: "font4xl",
  };
  const textSize = mapSizeText[sizeText];
  const classes = cn(s.appText, s[colorType], s[textSize], className);
  if (title) {
    const HeaderTag = title;
    return <HeaderTag className={`${classes} ${s[title]}`}>{text}</HeaderTag>;
  }
  return <div className={classes}>{text}</div>;
};
