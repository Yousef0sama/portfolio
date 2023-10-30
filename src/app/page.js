"use client"

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/public/css/style.scss'
import Header from "./pages/header";
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import { useState , createContext, useEffect } from 'react';

export const HeaderContext = createContext();
export const PageContext = createContext();
export const ProjectsContext = createContext();

function App() {


  const [menu, setMenu] = useState(""),
        [page, setPage] = useState("Home"),
        [mode, setMode] = useState("light"),
        [theme, setTheme] = useState("blue");

  const projects = require("@/src/json/projects.json");

  useEffect(() => {

    if (theme === "red") {
      document.documentElement.style.setProperty('--pri-color',"rgb(210, 0, 0)");
      document.documentElement.style.setProperty('--sec-color',"rgb(155, 0, 0)");
      document.documentElement.style.setProperty('--alpha-color',"rgb(210, 0, 0, 0.6)");
    } else if (theme === "blue") {
      document.documentElement.style.setProperty('--pri-color',"rgb(0, 58, 247)");
      document.documentElement.style.setProperty('--sec-color',"rgb(0, 44, 188)");
      document.documentElement.style.setProperty('--alpha-color',"rgb(0, 58, 247, 0.6)");
    } else if (theme === "green") {
      document.documentElement.style.setProperty('--pri-color',"rgb(0, 123, 64)");
      document.documentElement.style.setProperty('--sec-color',"rgb(0, 93, 63)");
      document.documentElement.style.setProperty('--alpha-color',"rgb(0, 123, 64, 0.6)");
    } else if (theme === "yellow") {
      document.documentElement.style.setProperty('--pri-color',"rgb(170, 145, 24)");
      document.documentElement.style.setProperty('--sec-color',"rgb(130, 115, 21)");
      document.documentElement.style.setProperty('--alpha-color',"rgb(170, 145, 24, 0.6)");
    } else if (theme === "purple") {
      document.documentElement.style.setProperty('--pri-color',"rgb(117, 0, 184)");
      document.documentElement.style.setProperty('--sec-color',"rgb(91, 0, 144)");
      document.documentElement.style.setProperty('--alpha-color',"rgb(117, 0, 184, 0.6)");
    }

  }, [theme])

  return (
    <div className={`${mode}`}>
      <HeaderContext.Provider value={{ menu, setMenu, page, setPage, mode, setMode, theme, setTheme }}>
        <Header />
      </HeaderContext.Provider>
      <PageContext.Provider value={{setPage}}>
        {page == "Home" && <Home />}
      </PageContext.Provider>
      <ProjectsContext.Provider value={{projects}}>
        {page == "About" && <About />}
        {page == "Projects" && <Projects />}
      </ProjectsContext.Provider>
      {page == "Contact" && <Contact />}
    </div>
  );
}


export default App;


