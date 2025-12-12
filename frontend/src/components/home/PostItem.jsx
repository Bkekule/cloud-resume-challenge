import { NavLink } from "react-router-dom";

export default function PostItem(props) {
  return (
    <nav className={props.handle}>
      <div className="date">{props.date}</div>
      <NavLink
        key={props.handle}
        to={`/home/blog/${props.date}/${props.handle}`}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        {props.title}
      </NavLink>
    </nav>
  );
}
