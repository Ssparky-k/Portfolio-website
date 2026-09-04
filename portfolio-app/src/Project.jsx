

import { Link } from "react-router-dom";

function Project() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <p className="projects-subtitle">
          Some of the projects I have developed using HTML, CSS and JavaScript.
        </p>

        <div className="project-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-icon">🎓</div>
            <h3>Student Management System</h3>
            <p>
              A web-based application designed to manage student records. It
              provides an easy-to-use interface for adding, editing, searching
              and deleting student information.
            </p>
            <div className="technologies">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-icon">❌⭕</div>
            <h3>Tic Tac Toe</h3>
            <p>
              An interactive two-player Tic Tac Toe game developed with
              JavaScript. The game includes turn switching, win detection, draw
              detection and restart functionality.
            </p>
            <div className="technologies">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-icon">✊✋✌️</div>
            <h3>Rock Paper Scissors</h3>
            <p>
              A browser-based Rock Paper Scissors game where the player competes
              against the computer. JavaScript is used to generate random
              choices and calculate the winner.
            </p>
            <div className="technologies">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <Link to="/" className="btn" style={{ marginRight: "15px" }}>
            Back to Home
          </Link>
          <Link to="/Contact" className="btn">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Project;