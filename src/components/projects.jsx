import "./projects.scss";
import ProjectCard from "./projectCard";
import footbal from "../images/projects/footbalClub.png";
import interior from "../images/projects/interior.png";
import todolist from "../images/projects/todolist.png";
import movie from "../images/projects/movie.png";
import currency from "../images/projects/currencyConverter.png";

export default function Projects() {
  return (
    <div className="projects">
      <ProjectCard
        title="Footbal Club Website"
        img={footbal}
        github="https://github.com/Cafarli/FootballClubSite.git"
        demo="https://fcj-football-club.netlify.app/"
      />
      <ProjectCard
        title="Interior Design"
        img={interior}
        github="https://github.com/Cafarli/Interior.git"
        demo="https://interiordesign-website.netlify.app/"
      />
      <ProjectCard
        title="Movie List"
        img={movie}
        github="https://github.com/Cafarli/MovieApp.git"
      />
      <ProjectCard
        title="Currency Converter"
        img={currency}
        github="https://github.com/Cafarli/ValyutaDeyisdirici-CurrencyConverter"
      />
      <ProjectCard
        title="Currency Converter"
        img={todolist}
        github="https://github.com/Cafarli/Figma-To-do-list.git"
      />

    </div>
  );
}
