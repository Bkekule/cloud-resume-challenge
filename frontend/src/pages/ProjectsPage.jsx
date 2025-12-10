import { useState, useEffect } from "react";
import ProjectItem from "comps/projects/ProjectItem";
import "css/pages/projects.css";
import projectsData from "data/projectsData";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

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
