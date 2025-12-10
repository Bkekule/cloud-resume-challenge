import Button from "comps/Button";
import ResumeHeader from "comps/resume/Header";
import Intro from "comps/resume/Intro";
import SideBar from "comps/resume/SideBar";
import Content from "comps/resume/Content";
import "css/pages/resume.css";
import resumeData from "data/ResumeData";
import { createFocusTrap } from "focus-trap";
import { useEffect, useRef, useState } from "react";

export default function ResumePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const sidebarButtonRef = useRef(null);
  const tabAbleSelectors = [
    "a[href]",
    "area[href]",
    "button:not([disabled])",
    'input:not([disabled]):not([type="hidden"])',
    "select:not([disabled])",
    "textarea:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
  ];

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };

    if (sidebarOpen) {
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }
  }, [sidebarOpen]);

  useEffect(() => {
    if (sidebarOpen) return;

    const onKeyDown = (e) => {
      if (e.key !== "Escape") return;
      const active = document.activeElement;
      if (active && typeof active.blur === "function") {
        active.blur();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [sidebarOpen]);

  useEffect(() => {
    if (!sidebarRef.current) return;
    const trap = createFocusTrap(sidebarRef.current, {
      initialFocus: () => {
        const tabAbleElt = sidebarRef.current.querySelector(
          tabAbleSelectors.join(",")
        );
        return tabAbleElt || sidebarRef.current;
      },
      returnFocusOnDeactivate: true,
      setReturnFocus: () => sidebarButtonRef.current,
    });
    if (sidebarOpen) trap.activate();
    else trap.deactivate();
    return () => trap.deactivate();
  }, [sidebarOpen]);

  const handleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const sidebarID = "resume-sidebar";
  return (
    <div className="container">
      <ResumeHeader
        {...resumeData.header}
        handleSidebar={handleSidebar}
        sidebarOpen={sidebarOpen}
        sidebarButtonRef={sidebarButtonRef}
        sidebarID={sidebarID}
      />
      <Intro {...resumeData} />
      <div className={`main${sidebarOpen ? " sidebar-open" : ""}`}>
        <aside
          className="sidebar"
          id={sidebarID}
          aria-hidden={!sidebarOpen}
          hidden={sidebarOpen}
          tabIndex="-1"
          ref={sidebarRef}
        >
          {sidebarOpen && (
            <Button
              type="button"
              onClick={handleSidebar}
              aria-label="Close About"
              className="close-sidebar"
              icon={<span>✕</span>}
            />
          )}
          <SideBar {...resumeData.sidebar} />
        </aside>
        <aside className="content">
          <Content {...resumeData} />
        </aside>
      </div>
    </div>
  );
}
