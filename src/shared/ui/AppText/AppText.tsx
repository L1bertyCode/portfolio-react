import s from "./AppText.module.scss";
import cn from "classnames";
type AppTextTitleVariant = "h1" | "h2" | "h3" | "h4";
type AppTextColorType = "primary" | "secodary" | "accented";
interface AppTextProps {
  className?: string;
  text: string;
  title?: AppTextTitleVariant;
  colorType?: AppTextColorType;
};

export const AppText = ({ text, colorType = "primary", title, className }: AppTextProps) => {
  const classes = cn(
    s.appText,
    s[colorType],
    className
  );
  if (title) {
    const HeaderTag = title;
    return (
      <HeaderTag
        className={classes}
      >
        {text}
      </HeaderTag>
    );
  }
  return (
    <span className={classes}>{text}</span>
  );
};