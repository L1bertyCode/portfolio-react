import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Footer.module.scss";
import { Logo } from "@/shared/ui/Logo/Logo";
import { Nav } from "@/features/Nav";
export const Footer = () => {
  return (
    <div className={s.footer}>
      <div>
        <Logo />
        <div className={s.contacts}>
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
        <Nav />
        <AppText text="Designed and built by S-ProG MG with Love & Coffee" />
      </div>
    </div>
  );
};
