// import "./projects.scss";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";

export default function ProjectCard(props) {
    console.log(props.demo);
  return (
      <div className="project">
        <img alt="football-club" src={props.img}></img>
        <div className="infoProject">
          <p>{props.title}</p>
          <div className="buttons">
            <a href={props.github}>
              <button>
                <AiFillGithub style={{color:"white"}} />
                Github
              </button>
            </a>
            {props.demo!==undefined?
            <a href={props.demo}>
              <button>
                <BsLink45Deg />
                Demo
              </button>
            </a>
            :null}
          </div>
        </div>
      </div>
  );
}
