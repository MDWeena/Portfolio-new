import React, { useContext } from "react";
import { ThemeContext } from "../../Context";
import "./footer.css"


function Footer() {
  const year = new Date().getFullYear();
  const theme = useContext(ThemeContext);
  const {darkMode} = theme.state;
  return (
    <footer style={{backgroundColor: darkMode && 'rgb(99, 95, 95)'}}>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
