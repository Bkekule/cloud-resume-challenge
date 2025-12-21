import { useEffect } from "react";
import "css/default.css";
import Header from "comps/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname: location } = useLocation();

  useEffect(() => {
    let pageName = "home";
    if (location === "/resume") {
      pageName = "resume";
    } else if (location === "/projects") {
      pageName = "projects";
    }
    document.body.setAttribute("location", pageName);
    return () => {
      document.body.removeAttribute("location");
    };
  }, [location]);
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
}
