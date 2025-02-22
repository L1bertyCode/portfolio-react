import { ReactNode } from "react";
import { Link, LinkProps, NavLink, NavLinkProps, To } from "react-router-dom";
import s from "./AppNavLink.module.scss";
import cn from "classnames";

type AppNavLinkColorType = "primary" | "secondary" | "accented" | "gradient";

interface AppNavLinkProps extends Omit<NavLinkProps, "to"> {
  children: ReactNode;
  to?: To;
  colorType?: AppNavLinkColorType;
  className?: string;
}
export const AppNavLink = ({
  children,
  className,
  colorType = "primary",
  to = "/",
  ...otherProps
}: AppNavLinkProps) => {
  return (
    <NavLink
      to={to}
      {...otherProps}
      className={cn(s.appNavLink, s[colorType], className)}
    >
      {children}
    </NavLink>
  );
};
