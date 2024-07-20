import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
        <NavBar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
