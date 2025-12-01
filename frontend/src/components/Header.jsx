import { NavLink } from "react-router-dom";

export default function Header() {
  const links = [
    { label: "Home", to: "/" },
    { label: "Resume", to: "/resume" },
    { label: "Projects", to: "/projects" },
  ];

  return (
    <header>
      <nav>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            end={link.to === "/"}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
