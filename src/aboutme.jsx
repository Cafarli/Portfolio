import "./aboutme.scss";
import photo from "../src/images/avatar.png";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import file from "../src/resume/Turkana's_CV.pdf";
import html from "../src/images/logos/html-5.png"
import css from "../src/images/logos/css-3.png"
import js from "../src/images/logos/js.png"
import java from "../src/images/logos/java.png"
import python from "../src/images/logos/python.png"
import react from "../src/images/logos/science.png"
import oracle from "../src/images/logos/oracle.png"
import mysql from "../src/images/logos/mysql.png"
import github from "../src/images/logos/github.png"
export default function AboutMe() {
  return (
    <div className="aboutme">
      <div className="welcome">
        <div className="text">
          <h1>
            Hi,<span className="wave">👋</span> I am Turkana Jafarli
          </h1>
          <TypeAnimation
            className="typeText"
            sequence={[
              "I am a developer from Azerbaijan",
              2500,
              "I am a front-end developer",
              2500,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
          <button className="download">
            <Link to={file} target="_blank">
              Download CV
            </Link>
          </button>
        </div>
        <div className="photo">
          <img alt="developer" src={photo}></img>
        </div>
      </div>
      <div className="info skills">
        <h1>🎯 Skills && Tools </h1>
        <div className="skillPart">
          <img alt="https://www.flaticon.com/free-icons/html-5" src={html}></img>
          <img alt="https://www.flaticon.com/free-icons/css-3" src={css}></img>          
          <img alt="https://www.flaticon.com/free-icons/js" src={js}></img>
          <img alt="https://www.flaticon.com/free-icons/react" src={react}></img>
          <img alt="https://www.flaticon.com/free-icons/java" src={java}></img>
          <img alt="https://www.flaticon.com/free-icons/python" src={python}></img>
          <img alt="https://www.flaticon.com/free-icons/oracle" src={oracle}></img>
          <img alt="https://www.flaticon.com/free-icons/mysql" src={mysql}></img>
          <img alt="https://www.flaticon.com/free-icons/github" src={github}></img>

        </div>
      </div>
    </div>
  );
}
