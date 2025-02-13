import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Footer.module.scss";
import { Logo } from "@/shared/ui/Logo/Logo";
export const Footer = () => {
  return (
    <div className={s.footer}>
      <div>
        <Logo />
        <div>
          <AppText text="+7(999)-999-99-99" />
          <AppText text="libertycodeg@gmail.com" />

          <div className={s.socials}>
            <a href="#">gh</a>
            <a href="#">tw</a>
            <a href="#">in</a>
          </div>
        </div>
      </div>
      <hr />
      <div>

        <nav className={s.nav}>
          <a href="#" className="link">Home</a>
          <a href="#" className="link">About</a>
          <a href="#" className="link">Stack</a>
          <a href="#" className="link">Projects</a>
          <a href="#" className="link">Contacts</a>
        </nav>
        <AppText text="Designed and built by S-ProG MG with Love & Coffee" />
      </div>
    </div>
  );
};