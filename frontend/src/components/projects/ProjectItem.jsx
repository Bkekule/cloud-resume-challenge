import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function ProjectText(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <NavLink
        key={props.handle}
        to={`/projects/${props.handle}`}
        state={{ project: props }}
      >
        Learn More <ChevronRight />
      </NavLink>
    </>
  );
}

export default function ProjectItem(props) {
  return (
    <article className={props.handle}>
      {!props.phone ? (
        <div className="text-not-phone">
          <ProjectText {...props} />
        </div>
      ) : (
        <ProjectText {...props} />
      )}
      <img
        src={props.thumbnail}
        alt={props.title + " Project"}
        title={props.title + " Project Image"}
      />
    </article>
  );
}
