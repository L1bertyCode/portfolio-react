import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Footer.module.scss";
import { Logo } from "@/shared/ui/Logo/Logo";
import { Nav } from "@/features/Nav";
import { Socials } from "@/features/Socials";
export const Footer = () => {
  return (
    <div className={s.footer}>
      <div>
        <Logo />
        <div className={s.contacts}>
          <AppText text="+7(911)-883-17-85" />
          <AppText text="libertycodeg@gmail.com" />
          <Socials />
        </div>
      </div>
      <hr />
      <div>
        <Nav />

        <div className={s.text}>
          <AppText text="Designed and built by" />
          <AppText
            colorType="gradient"
            text=" S-ProG"
          />
          <AppText text="with" />
          <AppText
            colorType="gradient"
            text="Love"
          />
          <AppText text="&" />
          <AppText
            colorType="gradient"
            text="Coffee"
          />
        </div>
      </div>
    </div>
  );
};
