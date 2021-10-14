import React, {useState, useEffect, useContext} from "react";
import Intro from './components/intro/Intro';
import Toggle from './components/toggle/Toggle'
import Contact from './components/contact/Contact'
import Project from "./components/Project/Project";
import { ThemeContext } from "./Context";
function App() {
const theme = useContext(ThemeContext)
const {darkMode} = theme.state;
  return ( 
    <div style={{
      backgroundColor: darkMode ? '#000' : '#fff',
      color: darkMode && '#fff'
    }}>
      <Toggle />
<Intro />
<Project />
<Contact />
    </div>
  );
}

export default App;
