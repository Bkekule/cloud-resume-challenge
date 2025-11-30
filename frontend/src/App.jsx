import { useState } from 'react'
import './App.css'
import Header from 'comps/Header.jsx'
import { Header as ResumeHeader } from 'pages/resume/Header.jsx'
import Intro from 'pages/resume/Intro.jsx'
import SideBar from 'pages/resume/SideBar.jsx'
import Content from 'pages/resume/Content.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      {/* <div className="container" data-location="resume">
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
      </div> */}
    </>
  )
}

export default App
