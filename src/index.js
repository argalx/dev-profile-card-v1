import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skillset />
      </div>
    </div>
  );
}

// Avatar Component
function Avatar() {
  return (
    <div>
      <img className="avatar" src="./my-profile.jpg" alt="My Profile" />
    </div>
  );
}

// Intro Component
function Intro() {
  return (
    <div>
      <p>
        Aspiring full-stack web developer and solutions architect for
        applications and databases at Shellsoft Technology Corporation, I love
        playing MMORPG games, building Gunpla, and watching anime.
      </p>
    </div>
  );
}

// Skillset Component
function Skillset() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="&#128507;" color="blue" />
      <Skill skill="JavaScript" emoji="&#128508;" color="yellow" />
      <Skill skill="Python" emoji="&#128509;" color="green" />
      <Skill skill="React" emoji="&#128510;" color="gray" />
      <Skill skill="Git and Github" emoji="&#128511;" color="orange" />
      <Skill skill="Terraform" emoji="&#128512;" color="purple" />
      <Skill skill="ARM Template/Bicep" emoji="&#128513;" color="pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
