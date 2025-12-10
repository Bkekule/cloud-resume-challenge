import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "pages/HomePage";
import ProjectsPage from "pages/ProjectsPage";
import ProjectPage from "pages/ProjectPage";
import ResumePage from "pages/ResumePage";

createRoot(document.querySelector("main")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:handle" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
