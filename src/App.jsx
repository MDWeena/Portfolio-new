import React, {useContext} from "react";
import Intro from './components/intro/Intro';
import Toggle from './components/toggle/Toggle';
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import { ThemeContext } from "./Context";


function App() {
  const theme = useContext(ThemeContext);
  const {darkMode} = theme.state;

  return (
    <div style={{
      backgroundColor: darkMode ? '#0F2027' : 'white',
      color: darkMode && 'white',
      // backgroundImage: darkMode && 'linear-gradient(to right, #0F2027,#203A43,#2C5364)'
    }}>
      <Toggle />
      <Intro />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
