import React, { useContext } from "react";
import Intro from "./components/intro/Intro";
import Toggle from "./components/toggle/Toggle";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import { ThemeContext } from "./Context";
import "./App.css";

function App() {
  const theme = useContext(ThemeContext);
  const { darkMode } = theme.state;

  return (
    <>
      <Toggle />
      <div
        className="mobile"
        style={{
          // backgroundColor: darkMode ? "#0F2027" : "white",
          color: darkMode && "white",
          overflowX: "hidden",
          backgroundImage:
            darkMode && "linear-gradient(to right, #0F2027,#203A43,#2C5364)"
        }}
      >
        <h1 className="mobile-text" style={{
          // backgroundColor: darkMode ? "#0F2027" : "white",
          color: darkMode && "white",
        }}>MOBILE VIEW NOT AVAILABLE YET. KINDLY VIEW IN DESKTOP</h1>
      </div>
      <div
        className="main"
        style={{
          backgroundColor: darkMode ? "#0F2027" : "white",
          color: darkMode && "white",
          width: "100vw",
          overflowX: "hidden"
          // backgroundImage: darkMode && 'linear-gradient(to right, #0F2027,#203A43,#2C5364)'
        }}
      >
        <Toggle />
        <Intro />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
