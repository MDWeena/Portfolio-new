import React, { useContext } from "react";
import { ThemeContext } from "../../Context";
import "./footer.css"


function Footer() {
  const year = new Date().getFullYear();
  const theme = useContext(ThemeContext);
  const {darkMode} = theme.state;
  return (
    <footer style={{backgroundColor: darkMode && '#73BEC5'}}>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
