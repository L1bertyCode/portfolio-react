import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Projects.module.scss";
import { ProjectsItem } from "../ProjectsItem/ProjectsItem";
export const Projects = () => {
  return (
    <div className={s.projects}>
      <AppText
        text={"Projects"}
        title="h2"
      />
      <AppText
        text={"Things I’ve built so far"}
        title="h3"
      />
      <ProjectsItem />
    </div>
  );
};