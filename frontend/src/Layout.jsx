import { useState } from "react";
import "./Layout.css";
import Header from "comps/Header.jsx";
import { Outlet } from "react-router";

export default function Layout() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
}
