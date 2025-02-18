import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./ProjectsItem.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { Project } from "../Projects/Projects";
import cn from "classnames";

export const ProjectsItem = ({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) => {
  const { imgSrc, name, description, techStack, livePreview, viewCode } =
    project;
  return (
    <div className={cn(s.projectsItem, className)}>
      {imgSrc ? (
        <img
          src={imgSrc}
          className={s.img}
          alt="project"
        />
      ) : (
        <img
          src="#"
          className={s.img}
          alt="project"
        />
      )}
      <div className={s.info}>
        <AppText
          className={s.name}
          text={name}
          title="h4"
        />
        <AppText
          className={s.description}
          text={description}
        />
        <div className={s.stackWrapper}>
          <AppText
            className={s.stackTitle}
            text={`${"Tech stack:"}`}
          />
          <AppText
            className={s.stackList}
            text={techStack.join(", ")}
          />
        </div>
        <div className={s.links}>
          <AppLink
          className={s.link}
           to={livePreview}>Live Preview</AppLink>
          <AppLink
          className={s.link}
           to={viewCode}>View Code</AppLink>
        </div>
      </div>
    </div>
  );
};
