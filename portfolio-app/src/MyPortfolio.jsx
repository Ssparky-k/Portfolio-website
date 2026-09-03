import { useEffect } from "react";
// import Typed from "typed.js";

function MyPortfolio() {
  useEffect(() => {
    const typed = new Typed("#element", {
      strings: [
        "Web Developer.",
        "Web Designer.",
        "Frontend Developer."
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);


  const handleResumeClick = () => {
    alert("Resume is downloading!");
  };



  return (
    <>
      <header>
        <nav>
          <div className="left">Shivraj Portfolio</div>

          <div className="right">
            <ul>
              <li className="home">
                <a href="/" onClick={handleHomeClick}>
                  Home
                </a>
              </li>

              <li className="project">
                <a href="/project.html">Projects</a>
              </li>

              <li className="contact">
                <a href="/contact.html">Contact Me</a>
              </li>

              <li className="about">
                <a href="/about.html">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

    
      <main>
        <section className="firstSection">
          <div className="leftSection">
            <div>
              Hi, My name is <span className="purple">Shivraj</span>
            </div>

            <div>
              and I am a Computer Engineering Student,
            </div>

            <div>and passionate</div>

            <span id="element"></span>

            <div className="buttons">
              <a
                href="/Shivraj kate.pdf"
                download
                className="btn"
                onClick={handleResumeClick}
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="rightSection">
            <img src="/developer.png" alt="Developer" />
          </div>
        </section>

        <hr />

        {/* Second Section */}
        <section className="secondSection">
          <span className="text-gray">
            What I have done so far
          </span>

          <h1>Education and Experience</h1>

          <div className="box">
            {/* Education */}
            <div className="vertical">
              <img
                className="image-top"
                src="/diplomaStudent.png"
                alt="Diploma Student"
              />

              <div className="vartical-title">
                Diploma Student (2024-2026)
              </div>

              <div className="vartical-decs">
                I am a Diploma Computer Engineering student
                (2024-2026) with an interest in software
                development, web technologies, databases, and
                emerging technologies. I enjoy building practical
                projects and improving my programming and
                problem-solving skills.
              </div>
            </div>

            {/* Technologies */}
            <div className="vertical">
              <img
                className="image-top"
                src="/html,css,js.png"
                alt="HTML CSS JavaScript"
              />

              <div className="vartical-title">
                Technologies :- HTML, CSS, JS
              </div>

              <div className="vartical-decs">
                I have a strong knowledge in front-end web
                development. I enjoy creating responsive and
                interactive websites using HTML, CSS, and
                JavaScript. I am continuously improving my
                programming, problem-solving, and web development
                skills by working on practical projects.
              </div>
            </div>

            {/* Student Management System */}
            <div className="vertical">
              <img
                className="image-top"
                src="/SMS.jpg"
                alt="Student Management System"
              />

              <div className="vartical-title">
                1st Project :- Student Management System
              </div>

              <div className="vartical-decs">
                A web-based Student Management System designed
                to manage and organize student information
                through a simple and user-friendly interface.
                The project demonstrates the use of HTML for
                structure, CSS for responsive styling, and
                JavaScript for interactive functionality.
              </div>
            </div>

            <div className="vertical">
              <img
                className="image-top"
                src="/games.png"
                alt="Game Projects"
              />

              <div className="vartical-title">
                Game Projects :- Tic Tac Toe and Rock Paper Scissor
              </div>

              <div className="vartical-decs">
                An interactive Tic Tac Toe game developed using
                HTML, CSS, and JavaScript. The game allows two
                players to play against each other through an
                interactive and responsive interface.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer">
          <div className="footer-first">
            <h3>Shivraj Developer Portfolio</h3>
          </div>

          <div className="footer-second">
            <ul>
              <li>Home</li>
              <li>About Me</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-third">
            <ul>
              My hobbies
              <li>Play Video Games</li>
              <li>Drawing</li>
              <li>Running</li>
            </ul>
          </div>
        </div>

        <div className="footer-rights">
          Copyright © www.shivrajportfolio.com | All rights reserved
        </div>
      </footer>
    </>
  );
}

export default MyPortfolio
