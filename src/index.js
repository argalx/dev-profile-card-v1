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
    <div>
      <ul className="skill-list">
        <li className="skill" style={{ backgroundColor: "blue" }}>
          HTML+CSS &#128516;
        </li>
        <li className="skill" style={{ backgroundColor: "Yellow" }}>
          JavaScript &#128507;
        </li>
        <li className="skill" style={{ backgroundColor: "Green" }}>
          Python &#128508;
        </li>
        <li className="skill" style={{ backgroundColor: "Gray" }}>
          Git and GitHub &#128509;
        </li>
        <li className="skill" style={{ backgroundColor: "orange" }}>
          Terraform &#128511;
        </li>
        <li className="skill" style={{ backgroundColor: "orange" }}>
          React &#128515;
        </li>
      </ul>
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
