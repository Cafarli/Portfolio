import "./projects.scss";
import { AiFillGithub } from "react-icons/ai";

export default function Projects(){
    return(
        <div className="projects">
            <div className="project">
                <img></img>
                <div className="infoProject">
                    <p></p>
                    <a href=""><button><AiFillGithub/>Github</button></a>
                </div>
            </div>
        </div>
    );
}