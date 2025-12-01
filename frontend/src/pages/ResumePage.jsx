import ResumeHeader from "comps/resume/Header.jsx";
import Intro from "comps/resume/Intro.jsx";
import SideBar from "comps/resume/SideBar.jsx";
import Content from "comps/resume/Content.jsx";
import "css/pages/resume.css";
import { resumeData } from "data/ResumeData.js";

export default function ResumePage() {
  return (
    <div className="container">
      <ResumeHeader {...resumeData.header} />
      <Intro {...resumeData} />
      <div className="main">
        <aside className="sidebar">
          <SideBar {...resumeData.sidebar} />
        </aside>
        <aside className="content">
          <Content {...resumeData} />
        </aside>
      </div>
    </div>
  );
}
