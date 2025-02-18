import { AppLink } from "@/shared/ui/AppLink/AppLink";
import s from "./Socials.module.scss";
interface SocialsProps {
  className?: string;
}
export const Socials = ({ className }: SocialsProps) => {
  return (
    <div className={s.socials}>
      <AppLink to="/">gh</AppLink>
      <AppLink to="/">tw</AppLink>
      <AppLink to="/">in</AppLink>
    </div>
  );
};
