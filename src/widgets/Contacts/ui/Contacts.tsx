import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Contacts.module.scss";
export const Contacts = () => {
  return (
    <section className={s.contacts}>
      <AppText
        colorType="accented"
        text="For any questions please mail me:"
        title="h2"
      />
      <AppText
        colorType="gradient"
        text="libertycodeg@gmail.com"
        title="h2"
      />
    </section>
  );
};
