import ResumeHeader from "pages/resume/Header.jsx";
import Intro from "pages/resume/Intro.jsx";
import SideBar from "pages/resume/SideBar.jsx";
import Content from "pages/resume/Content.jsx";

export default function ResumePage() {
  return (
      <div className="container" data-location="resume">
        <ResumeHeader />
        <Intro />
        <div className="main">
          <aside className="sidebar">
            <SideBar />
          </aside>
          <aside className="content">
            <Content />
          </aside>
        </div>
      </div>
  );
}
