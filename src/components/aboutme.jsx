import "./aboutme.scss";
import Contact from "./contact";
import logo from "../images/JafarliTurkana.png";
import photo from "../images/avatar.png";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import DownloadIcon from "@mui/icons-material/Download";
import file from "../resume/Turkana's_CV.pdf";
import {
  DiJavascript1,
  DiReact,
  DiJava,
  DiPython,
  DiMsqlServer,
  DiMysql,
  DiBootstrap,
  DiHtml5,
  DiCss3,
  DiNetbeans,
} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiOracle,
  SiFigma,
} from "react-icons/si";

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
              "Developer from Azerbaijan",
              2500,
              "Front-end developer",
              2500,
              "SQL developer",
              2500,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
          <button className="download">
            <Link to={file} target="_blank">
              Download CV <DownloadIcon style={{ marginLeft: "2%" }} />
            </Link>
          </button>
        </div>
        <div className="photo">
          <img alt="developer" src={photo}></img>
        </div>
      </div>
      <div className="whoIam">
        <h1>Who I'm</h1>
        <div className="content">
          <img alt="logo" src={logo}></img>
          <p>
            I am a junior front-end and sql developer from Azerbaijan.
            <br />
            My areas of interest are <span>Web development</span> and{" "}
            <span>Data analytics</span>.
            <br />
            In addition to my university education, I develop myself by studying
            myself.
          </p>
        </div>
      </div>
      <div className="info skills">
        <h1>🎯 Skills && Tools </h1>
        <div className="skillPart">
          <div>
            <DiHtml5 title="Html5" />
            <DiCss3 title="Css3" />
            <DiJavascript1 title="Javascript" />
            <DiBootstrap title="Bootstrap" />
            <DiMsqlServer title="MsqlServer" />
            <DiReact title="React" />
            <DiMysql title="Mysql" />
            <SiOracle title="Oracle" />
            <DiJava title="Java" />
            <DiPython title="Python" />
          </div>
          <div>
            <SiVisualstudiocode title="VS Code" />
            <SiPostman title="Postman" />
            <DiNetbeans title="Netbeans" />
            <SiFigma title="Figma" />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
