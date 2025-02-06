import s from "./Banner.module.scss";
export const Banner = () => {
  return (
    <div className={s.banner}>
      <h1>Hi 👋,
        My name is
        S-ProG
        I build things for web</h1>
      <img
        src="#"
        alt="photo"
        className={s.photo}
      />
    </div>
  );
};