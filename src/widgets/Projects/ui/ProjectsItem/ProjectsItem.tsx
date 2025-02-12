import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./ProjectsItem.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

export const ProjectsItem = () => {
  return (
    <div className={s.projectsItem}>
      <img src="#" alt="project" />
      <AppText text="Project Tile goes here"
        title="h4"
      />
      <AppText text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" />
      <AppText text="Tech stack :" />
      <AppText text="HTML , JavaScript, SASS, React" />
      <div>
        <AppLink>Live Preview</AppLink>
        <AppLink>View Code</AppLink>
      </div>
    </div>
  );
};