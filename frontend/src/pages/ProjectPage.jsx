import { useParams, NavLink } from "react-router-dom";
import "css/pages/projects.css";
import projectsData from "data/ProjectData.js";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

export default function ProjectPage() {
  const { handle } = useParams();
  useEffect(() => {
    document.body.setAttribute("location", "projects");
  }, []);
  return (
    <div className={"container " + handle}>
      <NavLink to="/projects">
        <ChevronLeft /> Back To Projects
      </NavLink>
      <h2>
        {projectsData.find((project) => project.handle === handle)?.title}
      </h2>
    </div>
  );
}
