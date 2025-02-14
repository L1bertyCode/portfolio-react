import { Logo } from "@/shared/ui/Logo/Logo";
import s from "./Header.module.scss";
import { Nav } from "@/features/Nav";

export const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <div>
        <Nav />
        <div className={s.socials}>
          <a href="#">gh</a>
          <a href="#">tw</a>
          <a href="#">in</a>

        </div>
      </div>
    </header>
  );
};