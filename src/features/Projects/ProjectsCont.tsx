import { personalProjects } from "../../utils/projects";
import { SingleProject } from "./SingleProject";

export const ProjectsCont = () => {
  
  return (
    <div className="columns-1 gap-8 w-full full:columns-2">
      {personalProjects.map(project => <SingleProject key={project.id} project={project}/>)}
    </div>
  );
};
