import { ProjectsCont } from "../features/Projects/ProjectsCont";
import { Heading } from "../ui/Heading";

export const ProjectsSection = () => {
  return (
    <div className="relative z-10 flex flex-col items-center gap-12 mx-auto w-full pb-12 pt-[150px]
     max-w-7xl px-8"
    style={{background: "linear-gradient(180deg, rgba(0, 0, 0,0) 0%,rgb(16, 2, 22) 5%)"}}>
      <Heading text="Projects"/>
      <ProjectsCont/>
    </div>
  );
};
