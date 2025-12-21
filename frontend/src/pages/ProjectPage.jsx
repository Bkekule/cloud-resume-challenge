import { useParams, NavLink } from "react-router-dom";
import "css/pages/projects.css";
import projectsData from "data/projectsData";
import { ChevronLeft } from "lucide-react";
import DOMPurify from "dompurify";

export default function ProjectPage() {
  const { handle } = useParams();
  const project = projectsData.find((project) => project.handle === handle);
  return (
    <div className={"container " + handle}>
      <NavLink to="/projects">
        <ChevronLeft /> Back To Projects
      </NavLink>
      <h2>{project?.title}</h2>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(project?.body_html),
        }}
      />
    </div>
  );
}
