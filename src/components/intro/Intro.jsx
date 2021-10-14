import React, {useContext} from "react";
import "./intro.css";
import Me from "../../img/pic.png";
import { ThemeContext } from "../../Context";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const {darkMode} = theme.state;
  return (
    <div className="intro" id="#top">
      <div className="intro__top" style={{backgroundColor: darkMode && 'black'}}>
        <a href="#top" style={{color: darkMode && 'white'}}>Profile</a>
        <a href="#project" style={{color: darkMode && 'white'}}>Projects</a>
        <a href="#contact" style={{color: darkMode && 'white'}}>Contact</a>
      </div>
      <div className="intro__bottom">
      <div className="intro__left">
        <div className="intro__left__wrapper">
          <h2 className="intro__greeting">Hello, my name is </h2>
          <h1 className="intro__name">Winner Akpologun</h1>
          <div className="intro-title">
            <div className="intro-title__wrapper">
                <div className="intro-title__item">
                    Web Developer
                </div>
                <div className="intro-title__item">
                    UI/UX
                </div>
                <div className="intro-title__item">
                    Mobile Developer
                </div>
                <div className="intro-title__item">
                    Dev OPS
                </div>
                <div className="intro-title__item">
                   Content Creator
                </div>
            </div>
          </div>
          <p className="intro-desc">
            As a fullstack developer with equal proficiency in both frontend and backend development
            coupled with hands-on experience, I have worked on various projects and built different 
            products both personally and more importantly with different teams.
          </p>
        </div>
      </div>
      <div className="intro__right">
        <div className="intro__bg"></div>
        <img src={Me} alt="" className="intro__img" />
      </div>

      </div>
    </div>
  );
};

export default Intro;
