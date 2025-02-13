import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Contacts.module.scss";
export const Contacts = () => {
  return (
    <div className={s.contacts}>
      <AppText text="For any questions please mail me:"
        title="h2"
      />
      <AppText text="libertycodeg@gmail.com"
        title="h2"
      />
    </div>
  );
};