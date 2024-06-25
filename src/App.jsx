import React from "react";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Icons from "./components/Icons";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Content/>
      <Icons/>
    </BrowserRouter>
    </>
  );
}

export default App;