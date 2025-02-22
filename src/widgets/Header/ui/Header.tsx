import { Logo } from "@/shared/ui/Logo/Logo";
import s from "./Header.module.scss";
import { Nav } from "@/features/Nav";
import { Socials } from "@/features/Socials";

export const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <div>
        <Nav className={s.nav} />
        <Socials />
      </div>
      <span className={s.burgerWrapper}>
        <span className={s.burger}></span>
      </span>
    </header>
  );
};
