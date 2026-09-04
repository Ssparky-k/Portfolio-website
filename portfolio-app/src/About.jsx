

import { Link } from "react-router-dom";

function About() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="heading">
          Hello! I'm <span>Shivraj Sham Kate</span>
        </h1>

        <h3>
          Diploma Computer Engineering Student
          <span> | </span> Aspiring Software Developer
        </h3>

        <p>
          I am a Diploma Computer Engineering student (2024–2026) with an
          interest in software development, web technologies, databases, and
          emerging technologies. I enjoy building practical projects and
          improving my programming and problem-solving skills.
        </p>

        <p>
          I enjoy creating interactive and user-friendly web applications using{" "}
          <strong>HTML, CSS, and JavaScript</strong>. Through my projects, such
          as a{" "}
          <strong>
            Student Management System, Tic Tac Toe, and Rock Paper Scissors
          </strong>
          , I have developed my skills in JavaScript programming, DOM
          manipulation, problem-solving, and responsive web design.
        </p>

        <p>
          I am a motivated and curious learner who enjoys exploring new
          technologies and turning ideas into practical projects. My goal is to
          continuously improve my technical skills and build a successful career
          in the software and web development field.
        </p>

        <div className="hero-buttons">
          <Link to="/" className="btn secondary-btn">
            Back to Home
          </Link>
          <Link to="/Projects" className="btn primary-btn">
            View My Projects
          </Link>
          <Link to="/Contact" className="btn secondary-btn">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;