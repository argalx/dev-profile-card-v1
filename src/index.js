import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

// Task 1: Create an list/array of skills (skills, level (Beginner (Baby), Intermediate (Like), Advanced (Bicep)), color)
const skills = [
  {
    skill: "HTML+CSS",
    level: "Advanced",
    color: "blue",
  },
  {
    skill: "JavaScript",
    level: "Intermediate",
    color: "yellow",
  },
  {
    skill: "Python",
    level: "Beginner",
    color: "green",
  },
  {
    skill: "React",
    level: "Intermediate",
    color: "gray",
  },
  {
    skill: "Git and Github",
    level: "Intermediate",
    color: "orange",
  },
  {
    skill: "Terraform",
    level: "Intermediate",
    color: "purple",
  },
  {
    skill: "ARM Template/Bicep",
    level: "Intermediate",
    color: "pink",
  },
  {
    skill: "TypeScript",
    level: "Beginner",
    color: "blue",
  },
  {
    skill: "SQL",
    level: "Advanced",
    color: "Orange",
  },
];

// Task 3: Display certain emoji for each skill level

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
  // Task 2: Loop through the skills and display them
  const skillObject = skills;

  return (
    <div className="skill-list">
      {skillObject.map((skill) => (
        <Skill
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
          key={skill.skill}
        />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  console.log(skill, level, color);

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      {/* {level === "Beginner" && <span>👶</span>}
      {level === "Intermediate" && <span>👍</span>}
      {level === "Advanced" && <span>💪</span>} */}
      <span>
        {level === "Beginner" && "👶"}
        {level === "Intermediate" && "👍"}
        {level === "Advanced" && "💪"}
      </span>
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
