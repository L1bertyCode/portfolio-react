import { ElementType, SVGProps } from "react";
import cn from "classnames";
import s from "./AppIcon.module.scss";
interface AppIconProps extends SVGProps<SVGSVGElement> {
  SVG: ElementType;
  className?: string;
}
export const AppIcon = ({
  SVG,
  className,

  ...otherProps
}: AppIconProps) => {
  return (
    <SVG
      {...otherProps}
      className={cn(s.appIcon, className)}
    ></SVG>
  );
};
