import { AppLink } from "@/shared/ui/AppLink/AppLink";
import s from "./Nav.module.scss";
import { routeConfig } from "@/shared/config/routeConfig";

export const Nav = () => {
  return (
    <nav className={s.nav}>
      {routeConfig.map(r => (
        <AppLink
          key={r.name}
          to={r.path}
          className="link"
        >{r.name}
        </AppLink>
      ))}
    </nav>
  );
};
