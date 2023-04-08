import "./header.scss";
import { Link } from "react-router-dom";
import photo from "../images/JafarliTurkana.png"
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

export default function Header() {
    return(
        <div className="header">
            <ul>
                <ol className="logo"><Link to="/about-me"><img alt="logo" src={photo}></img></Link></ol>
                <ol className="page"><Link to="/about-me"><PersonOutlineRoundedIcon className="icon" />About me</Link></ol>
                <ol className="page"><Link to="/projects"><AccountTreeOutlinedIcon className="icon" /> My projects</Link></ol>
            </ul>
        </div>
    );
}