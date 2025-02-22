import { AppLink } from "@/shared/ui/AppLink/AppLink";
import s from "./Nav.module.scss";
import { routeConfig } from "@/shared/config/routeConfig";
import { useLocation } from "react-router-dom";
import { AppNavLink } from "@/shared/ui/AppNavLink/AppNavLink";
import cn from "classnames";

export const Nav = ({ className }: { className?: string }) => {
  const { pathname } = useLocation();
  return (
    <nav className={cn(s.nav, className)}>
      {routeConfig.map((r) => (
        <AppNavLink
          key={r.name}
          to={r.path}
          className={pathname === r.path ? s.active : ""}
        >
          {r.name}
        </AppNavLink>
      ))}
    </nav>
  );
};
