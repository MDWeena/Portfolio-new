import React, { useContext } from "react";
import "./intro.css";
import Me from "../../img/weena.png";
import { ThemeContext } from "../../Context";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const { darkMode } = theme.state;
  return (
    <div className="intro" id="#top">
      <div className="intro__top" style={{ backgroundColor: darkMode ? '#0F2027' : 'white' }}>
        <a href="#top" style={{ color: darkMode && "white" }}>
          Profile
        </a>
        <a href="#project" style={{ color: darkMode && "white" }}>
          Projects
        </a>
        <a href="#contact" style={{ color: darkMode && "white" }}>
          Contact
        </a>
        <a href="#contact" style={{ color: darkMode && "white" }}>
          Resume
        </a>
      </div>
      <div className="intro__bottom">
        <div className="intro__left">
          <div className="intro__left__wrapper">
            <h2 className="intro__greeting">
              Hi, my name is <span>Winner Akpologun</span>
            </h2>
            {/* <h1 className="intro__name">Winner Akpologun</h1> */}
            <div className="intro-title">
              <div className="intro-title_into">I'm a</div>
              <div className="intro-title__wrapper">
                <div className="intro-title__item">
                  <span>Web Developer</span>
                  <div className="intro-title__hider" style={{backgroundColor: darkMode ? '#0F2027' : 'white', borderColor: darkMode && 'white',}}></div>
                </div>
                <div className="intro-title__item">
                  <span>UI/UX Designer</span>
                  <div className="intro-title__hider" style={{backgroundColor: darkMode ? '#0F2027' : 'white', borderColor: darkMode && 'white'}}></div>
                </div>
                <div className="intro-title__item">
                  <span>Mobile Developer</span>
                  <div className="intro-title__hider" style={{backgroundColor: darkMode ? '#0F2027' : 'white', borderColor: darkMode && 'white'}}></div>
                </div>
                <div className="intro-title__item">
                  <span>Dev OPS Engineer</span>
                  <div className="intro-title__hider" style={{backgroundColor: darkMode ? '#0F2027' : 'white', borderColor: darkMode && 'white'}}></div>
                </div>
                <div className="intro-title__item">
                  <span>Content Creator</span>
                  <div className="intro-title__hider" style={{backgroundColor: darkMode ? '#0F2027' : 'white', borderColor: darkMode && 'white'}}></div>
                </div>
              </div>
            </div>
            <p className="intro-desc">
              As a fullstack developer with equal proficiency in both frontend
              and backend development coupled with hands-on experience, I have
              worked on various projects and built different products both
              personally and more importantly with different teams.
            </p>
          </div>
        </div>
        <div className="intro__right">
          <div className="intro__bg" style={{ backgroundColor: darkMode && '#73BEC5'}}></div>
          <img src={Me} alt="" className="intro__img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
