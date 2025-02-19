import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Projects.module.scss";
import { ProjectsItem } from "../ProjectsItem/ProjectsItem";
import culcPhoto from "@/shared/assets/projects/culc.png";

export type Project = {
  imgSrc?: string;
  name: string;
  description: string;
  techStack: string[];
  livePreview: string;
  viewCode: string;
};

const projects: Project[] = [
  {
    imgSrc: `${culcPhoto}`,
    name: "Calculator-vue3",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack: ["HTML", "JavaScript", "SASS", "React"],
    livePreview: "https://l1bertycode.github.io/calculator-vue3/",
    viewCode: "https://github.com/L1bertyCode",
  },
];

export const Projects = () => {
  return (
    <section className={s.projects}>
      <AppText
        className={s.title}
        text={"Projects"}
        title="h2"
        colorType="accented"
      />
      <AppText
        className={s.subTitle}
        text={"Things I’ve built so far"}
        title="h3"
      />
      <div className={s.list}>
        {projects.map((p) =>
          [p, p, p, p, p, p].map((p) => (
            <ProjectsItem
              className={s.project}
              project={p}
            />
          ))
        )}
      </div>
    </section>
  );
};
