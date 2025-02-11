import { AppText } from "../../../shared/ui/AppText/AppText";
import s from "./Stack.module.scss";
export const Stack = () => {
  return (
    <div className={s.stack}>
      <AppText
        text="My Tech Stack"
        title="h2"
      />
      <AppText
        text=" Technologies I’ve been working with recently"
        title="h3"
      />
    </div>
  );
};