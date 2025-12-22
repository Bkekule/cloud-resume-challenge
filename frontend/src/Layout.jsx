import { useEffect, useState } from "react";
import "css/default.css";
import Header from "comps/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname: location } = useLocation();
  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    let pageName = "home";
    if (location === "/resume") {
      pageName = "resume";
    } else if (location.startsWith("/projects")) {
      pageName = "projects";
    } else if (location.startsWith("/home/blog")) {
      pageName = "posts";
    }
    document.body.setAttribute("location", pageName);
    return () => {
      document.body.removeAttribute("location");
    };
  }, [location]);

  useEffect(() => {
    let isMounted = true;
    const endpoint = import.meta.env.VITE_COUNTER_ENDPOINT;

    const fetchAndIncrement = async () => {
      try {
        const getRes = await fetch(endpoint, {
          method: "GET",
          headers: { Accept: "application/json" },
        });
        let current = 0;
        if (getRes.ok) {
          const text = await getRes.text();
          let data;
          try {
            data = JSON.parse(text);
          } catch {
            data = text;
          }
          const numeric =
            typeof data === "number"
              ? data
              : Number(data?.count ?? data?.value ?? data);
          current = Number.isFinite(numeric) ? numeric : 0;
        }

        const next = current + 1;

        const postRes = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ count: next }),
        });

        let toDisplay = next;
        if (postRes.ok) {
          const text = await postRes.text();
          let data;
          try {
            data = JSON.parse(text);
          } catch {
            data = text;
          }
          const numeric =
            typeof data === "number"
              ? data
              : Number(data?.count ?? data?.value ?? data);
          if (Number.isFinite(numeric)) toDisplay = numeric;
        }

        if (isMounted) setViewCount(toDisplay);
      } catch {
        if (isMounted) setViewCount(0);
      }
    };

    fetchAndIncrement();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Header></Header>
      <Outlet context={{ viewCount }} />
    </>
  );
}
