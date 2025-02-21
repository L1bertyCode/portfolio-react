import { AppLink } from "@/shared/ui/AppLink/AppLink";
import s from "./Socials.module.scss";
import GithubSvg from "@/shared/assets/socials/github.svg";
import TelegrammSvg from "@/shared/assets/socials/telegramm.svg";
import MailSvg from "@/shared/assets/socials/email.svg";
import { AppIcon } from "@/shared/ui/AppIcon/AppIcon";
import { ElementType } from "react";
interface SocialsProps {
  className?: string;
}
export const Socials = ({ className }: SocialsProps) => {
  return (
    <div className={s.socials}>
      <AppLink to="https://github.com/L1bertyCode">
        <AppIcon
          className={s.fill}
          SVG={GithubSvg as ElementType}
        />
      </AppLink>
      <AppLink to="https://t.me/V914eslav">
        <AppIcon
          className={s.fill}
          SVG={TelegrammSvg as ElementType}
        />
      </AppLink>
      <AppLink to="https://mail.google.com/mail">
        <AppIcon
          className={s.fill}
          SVG={MailSvg as ElementType}
        />
      </AppLink>
    </div>
  );
};
