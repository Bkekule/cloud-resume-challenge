import { useMediaQuery } from "comps/Utils";
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
  const isPhone = useMediaQuery("(max-width: 768px)");
  const isPrinting = useMediaQuery("print");
  const effectiveIsPhone = isPhone && !isPrinting;
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

  // Handle body overflow when sidebar is open on phone. Useful in this case because of the Layout
  useEffect(() => {
    if (effectiveIsPhone && sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [effectiveIsPhone, sidebarOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== "Escape") return;

      const active = document.activeElement;
      if (active && active !== document.body && active?.blur) {
        active.blur();
        return;
      }

      if (effectiveIsPhone && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [effectiveIsPhone, sidebarOpen]);

  useEffect(() => {
    if (!effectiveIsPhone) return;

    if (trap.current) {
      trap.current.deactivate();
      trap.current = null;
    }

    if (sidebarOpen && sidebarRef.current) {
      trap.current = createFocusTrap(sidebarRef.current, {
        initialFocus: () => {
          const tabAbleElt = sidebarRef.current.querySelector(
            tabAbleSelectors.join(",")
          );
          return tabAbleElt || sidebarRef.current;
        },
        returnFocusOnDeactivate: true,
        setReturnFocus: () => sidebarButtonRef.current,
        escapeDeactivates: false, // We handle escapes manually above
      });
      trap.current.activate();
    }

    return () => {
      if (trap.current) {
        trap.current.deactivate();
        trap.current = null;
      }
    };
  }, [effectiveIsPhone, sidebarOpen]);

  useEffect(() => {
    if (!isPhone && sidebarOpen) {
      setSidebarOpen(false);
    }
  }, [isPhone]);

  const handleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const sidebarID = "resume-sidebar";

  // Phone view with sidebar open - show only sidebar with close button
  if (effectiveIsPhone && sidebarOpen) {
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

  // Normal view (phone without sidebar, or larger screen)
  return (
    <div className="container">
      <ResumeHeader
        {...resumeData.header}
        handleSidebar={handleSidebar}
        sidebarOpen={sidebarOpen}
        sidebarButtonRef={sidebarButtonRef}
        sidebarID={sidebarID}
        showSidebarButton={effectiveIsPhone}
      />
      <Intro {...resumeData} />
      <div className="main">
        <aside
          className="sidebar"
          id={sidebarID}
          aria-hidden={effectiveIsPhone}
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
