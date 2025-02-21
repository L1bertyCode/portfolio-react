import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Banner.module.scss";
import photo from "@/shared/assets/banner/p.png";
export const Banner = () => {
  return (
    <section className={s.banner}>
      <div>
        <AppText
          text="Hi 👋,"
          title="h1"
          colorType="accented"
        />
        <AppText
          text="I'm S-ProG"
          title="h1"
          colorType="accented"
        />
        <AppText
          text="I build things for web"
          title="h1"
          colorType="accented"
        />

        <AppText
          text="About"
          title="h4"
          colorType="accented"
          className={s.about}
        />
        <AppText text="We are a young company providing services for the development, maintenance and refinement of web projects of any complexity. The main direction of our activity is the development of front-end applications for private clients around the world." />
      </div>

      <img
        src={photo}
        alt="photo"
        className={s.photo}
      />
    </section>
  );
};
