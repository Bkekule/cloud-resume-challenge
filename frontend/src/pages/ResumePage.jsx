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
  const trap = useRef(null);
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
      if (e.key !== "Escape") return;

      if (sidebarOpen) {
        setSidebarOpen(false);
      } else {
        // This part can be moved to the layout if we can make it not depend on the sidebarOpen but mostly on the current focus area
        const active = document.activeElement;
        if (active?.blur) active.blur();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [sidebarOpen]);

  useEffect(() => {
    if (!sidebarRef.current) return;

    if (!trap.current) {
      trap.current = createFocusTrap(sidebarRef.current, {
        initialFocus: () => {
          const tabAbleElt = sidebarRef.current.querySelector(
            tabAbleSelectors.join(",")
          );
          return tabAbleElt || sidebarRef.current;
        },
        returnFocusOnDeactivate: true,
        setReturnFocus: () => sidebarButtonRef.current,
      });
    }

    return () => {
      if (trap.current) {
        trap.current.deactivate();
        trap.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!trap.current) return;

    if (sidebarOpen) {
      trap.current.activate();
    } else {
      trap.current.deactivate();
    }
  }, [sidebarOpen]);

  const handleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const sidebarID = "resume-sidebar";
  if (sidebarOpen) {
    return (
      <div className="container">
        <div className="main sidebar-open">
          <aside
            className="sidebar"
            id={sidebarID}
            aria-hidden={false}
            tabIndex="-1"
            ref={sidebarRef}
          >
            <Button
              type="button"
              onClick={handleSidebar}
              aria-label="Close sidebar"
              className="close-sidebar"
              icon={<span>✕</span>}
            />
            <SideBar {...resumeData.sidebar} />
          </aside>
        </div>
      </div>
    );
  }

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
      <div className="main">
        <aside
          className="sidebar"
          id={sidebarID}
          aria-hidden={true}
          tabIndex="-1"
          ref={sidebarRef}
        >
          <SideBar {...resumeData.sidebar} />
        </aside>
        <aside className="content">
          <Content {...resumeData} />
        </aside>
      </div>
    </div>
  );
}
