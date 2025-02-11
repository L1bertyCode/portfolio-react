import { ReactNode } from "react";
import { Link, LinkProps, To } from "react-router-dom";
import s from "./AppLink.module.scss";
import cn from "classnames";

// type AppLinkColorType = "primary" | "secondary" | "accented";

interface AppLinkProps extends Omit<LinkProps, "to"> {
  children: ReactNode;
  to?: To;
  // colorType?: AppLinkColorType;
  className?: string;
};
export const AppLink = ({
  children,
  className,
  // colorType = "primary",
  to = "/",
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      to={to}
      {...otherProps}
      className={cn(s.appLink, className)}
    >
      {children}
    </Link>
  );
};