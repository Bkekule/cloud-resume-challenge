import { useEffect } from "react";
import "css/default.css";
import Header from "comps/Header.jsx";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    let pageName = "home";
    if (location.pathname === "/resume") {
      const pageName = "resume";
    } else if (location.pathname === "/projects") {
      const pageName = "projects";
    }
    document.body.setAttribute("location", pageName);
    return () => {
      document.body.removeAttribute("location");
    };
  }, [location.pathname]);
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
}
