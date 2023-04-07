import "./aboutme.scss";
import photo from "../src/images/avatar.png";
import { TypeAnimation } from "react-type-animation";

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
            sequence={["I am a developer from Azerbaijan", 2500, "I am a front-end developer", 2500]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
          <button className="download">Download CV</button>
        </div>
        <div className="photo">
          <img alt="developer" src={photo}></img>
        </div>
      </div>
    </div>
  );
}
