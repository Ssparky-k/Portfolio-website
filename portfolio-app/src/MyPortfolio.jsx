import { useEffect, useRef } from "react";
import Typed from "typed.js";
import developer from './assets/developer.png';
import student from './assets/diplomaStudent.png';
import games from './assets/games.png';
import language from './assets/html,css,js.png';
import SMS from './assets/SMS.jpg';
import resumePdf from './assets/Shivraj kate.pdf';
import { Link } from "react-router-dom";

function MyPortfolio() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Web Developer.",
                "Frontend Developer.",
                "Web Designer."
            ],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const handleResumeDownload = () => {
        alert("Resume is downloading!");
    };

    return (
        <>
            <header>
                <nav>
                    <div className="left">
                        <Link to="/">Shivraj Portfolio</Link>
                    </div>

                    <div className="right">
                        <ul>
                            <li className="project">
                                <Link to="/Projects">Projects</Link>
                            </li>

                            <li className="contact">
                                <Link to="/Contact">Contact</Link>
                            </li>

                            <li className="about">
                                <Link to="/About">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main>
                <section className="firstSection">
                    <div className="leftSection">
                        <div>
                            Hi, My name is{" "}
                            <span className="purple">
                                Shivraj
                            </span>
                        </div>

                        <div>
                            and I am a Computer Engineering Student,
                        </div>

                        <div>
                            and passionate
                        </div>

                        <span ref={el} id="element"></span>

                        <div className="buttons">
                            <a
                                href={resumePdf}
                                download="Shivraj_Kate_Resume.pdf"
                                className="btn"
                                onClick={handleResumeDownload}
                            >
                                Download Resume
                            </a>
                        </div>


                    </div>

                    <div className="rightSection">
                        <img
                            src={developer}
                            alt="Developer"
                        />
                    </div>

                </section>

                <hr />


                <section className="secondSection">

                    <h1>
                        Education and Experience
                    </h1>

                    <div className="box">

                        <div className="vertical">

                            <img
                                className="image-top"
                                src={student}
                                alt="Student"
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


                        <div className="vertical">

                            <img
                                className="image-top"
                                src={language}
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


                        <div className="vertical">

                            <img
                                className="image-top"
                                src={SMS}
                                alt="Student Management System"
                            />

                            <div className="vartical-title">
                                1st Project :- Student Management System
                            </div>

                            <div className="vartical-decs">
                                A web-based Student Management System designed
                                to manage and organize student information through
                                a simple and user-friendly interface. The project
                                demonstrates the use of HTML for structure, CSS
                                for responsive styling, and JavaScript for
                                interactive functionality.
                            </div>

                        </div>

                        <div className="vertical">

                            <img
                                className="image-top"
                                src={games}
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
                        <h3>
                            Shivraj Developer Portfolio
                        </h3>
                    </div>

                    <div className="footer-second">
                        <ul>
                            Portfolio topics
                            <li>
                                <Link to="/Projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/About">About Me</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact</Link>
                            </li>
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
