import { ReactNode, SVGProps } from "react";
import cn from "classnames";
import s from "./AppIcon.module.scss";
interface AppIconProps extends SVGProps<SVGSVGElement> {
  Svg: ReactNode;
  className?: string;
};
export const AppIcon = ({
  // Svg,
  className, ...otherProps }: AppIconProps) => {
  return (
    <svg
      {...otherProps}
      className={cn(s.appIcon, className)}
    ></ svg>
    // <Svg
    //   {...otherProps}
    //   className={cn(s.appIcon, className)}>
    //   <svg />
    // </Svg>
  );
};