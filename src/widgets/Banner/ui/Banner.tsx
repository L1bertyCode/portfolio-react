import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Banner.module.scss";
import photo from "@/shared/assets/photo/p.png";
export const Banner = () => {
  return (
    <section className={s.banner}>
      <div>
        <AppText text="Hi 👋," title="h1" colorType="accented" />
        <AppText text="I'm S-ProG" title="h1" colorType="accented" />
        <AppText
          text="I build things for web"
          title="h1"
          colorType="accented"
        />
      </div>

      <img src={photo} alt="photo" className={s.photo} />
    </section>
  );
};
