import { useMediaQuery } from "comps/Utils";
import ProjectItem from "comps/projects/ProjectItem";
import "css/pages/projects.css";
import projectsData from "data/projectsData";

export default function ProjectsPage() {
  const isPhone = useMediaQuery("(max-width: 768px)"); // The fact that I am hardcoding these breakpoints in two separate locations(here and in the css) bothers me

  return (
    <div className="container">
      {projectsData.map((item) => (
        <ProjectItem key={item.handle} {...item} phone={isPhone} />
      ))}
    </div>
  );
}
