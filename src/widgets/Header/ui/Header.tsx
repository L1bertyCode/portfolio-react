import { Logo } from "../../../shared/ui/Logo/Logo";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={s.header}>
      <Logo />
      <div>

        <nav className={s.nav}>
          <a href="#" className="link">Home</a>
          <a href="#" className="link">About</a>
          <a href="#" className="link">Stack</a>
          <a href="#" className="link">Projects</a>
          <a href="#" className="link">Contacts</a>
        </nav>
        <div className={s.socials}>
          <a href="#">gh</a>
          <a href="#">tw</a>
          <a href="#">in</a>

        </div>
      </div>
    </div>
  );
};