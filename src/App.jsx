import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import "./App.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Responsive Design",
  "Git",
  "GitHub",
  "REST API",
  "Bootstrap",
  "Tailwind CSS",
];

const projects = [
  {
    number: "01",
    title: "To-Do List",
    description:
      "A simple task management application with add, delete and complete task functionality.",
    technology: "HTML • CSS • JavaScript",
  },
  {
    number: "02",
    title: "Weather App",
    description:
      "A simple weather application that displays weather information using an API.",
    technology: "HTML • CSS • JavaScript • API",
  },
  {
    number: "03",
    title: "Product Landing Page",
    description:
      "A clean and responsive landing page designed for a modern product or business.",
    technology: "HTML • CSS • JavaScript",
  },
  {
    number: "04",
    title: "Calculator",
    description:
      "A basic responsive calculator with common mathematical operations.",
    technology: "HTML • CSS • JavaScript",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "portfolio dark" : "portfolio"}>

      {/* Navigation */}
      <header className="header">
        <a href="#home" className="brand">
          <span>R</span>
          Rutik
        </a>

        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="mode-button"
          onClick={() => setDarkMode(!darkMode)}
          type="button"
        >
          {darkMode ? "☀" : "☾"}
        </button>
      </header>

      {/* Hero */}
      <main>

        <section id="home" className="hero">

          <div className="hero-left">

            <p className="hero-small">
              HELLO, I'M
            </p>

            <h1>
              Rutik Narayan
              <br />
              <span>Dongare</span>
            </h1>

            <div className="role">
              Frontend Developer
            </div>

            <p className="hero-text">
              B.Sc. IT graduate passionate about building clean,
              responsive and user-friendly websites with modern
              frontend technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button-primary">
                View Projects
              </a>

              <a href="#contact" className="button-outline">
                Contact Me
              </a>
            </div>

          </div>

          <div className="hero-right">

            <div className="profile-card">

              <div className="profile-circle">
                RD
              </div>

              <p className="available">
                ● Available for opportunities
              </p>

              <h3>
                Frontend Developer
              </h3>

              <p>
                HTML • CSS • JavaScript • React.js
              </p>

              <div className="card-line"></div>

              <div className="card-info">
                <span>Education</span>
                <strong>B.Sc. IT</strong>
              </div>

              <div className="card-info">
                <span>Location</span>
                <strong>Maharashtra, India</strong>
              </div>

            </div>

          </div>

        </section>

        {/* About */}
        <section id="about" className="section">

          <div className="section-heading">
            <span>01</span>

            <div>
              <p>WHO I AM</p>
              <h2>About Me</h2>
            </div>
          </div>

          <div className="about-layout">

            <div className="about-main">

              <h3>
                I create simple, modern and responsive web experiences.
              </h3>

              <p>
                I'm Rutik Narayan Dongare, a B.Sc. IT graduate
                focused on frontend development. I enjoy turning
                ideas into clean and functional websites.
              </p>

              <p>
                I am continuously improving my skills in JavaScript
                and React.js by building small projects and learning
                modern web development practices.
              </p>

            </div>

            <div className="about-details">

              <div>
                <span>NAME</span>
                <strong>Rutik Narayan Dongare</strong>
              </div>

              <div>
                <span>EDUCATION</span>
                <strong>B.Sc. IT</strong>
              </div>

              <div>
                <span>ROLE</span>
                <strong>Frontend Developer</strong>
              </div>

            </div>

          </div>

        </section>

        {/* Skills */}
        <section id="skills" className="section skills-section">

          <div className="section-heading">
            <span>02</span>

            <div>
              <p>WHAT I USE</p>
              <h2>Skills</h2>
            </div>
          </div>

          <div className="skills-list">

            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>

                <div className="skill-top">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{skill}</strong>

                </div>

                <div className="skill-bar">

                  <div
                    className="skill-progress"
                    style={{
                      width:
                        skill === "HTML5" ||
                        skill === "CSS3"
                          ? "90%"
                          : skill === "JavaScript"
                          ? "80%"
                          : skill === "React.js"
                          ? "70%"
                          : skill === "Git" ||
                            skill === "GitHub"
                          ? "75%"
                          : "65%",
                    }}
                  ></div>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* Projects */}
        <section id="projects" className="section">

          <div className="section-heading">

            <span>03</span>

            <div>
              <p>RECENT WORK</p>
              <h2>Projects</h2>
            </div>

          </div>

          <div className="projects">

            {projects.map((project) => (
              <article
                className="project"
                key={project.number}
              >

                <div className="project-top">
                  <span>{project.number}</span>
                  <span>↗</span>
                </div>

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <div className="project-bottom">

                  <span>
                    {project.technology}
                  </span>

                  <a href="#contact">
                    View →
                  </a>

                </div>

              </article>
            ))}

          </div>

        </section>

        {/* Education */}
        <section className="section">

          <div className="section-heading">

            <span>04</span>

            <div>
              <p>MY BACKGROUND</p>
              <h2>Education</h2>
            </div>

          </div>

          <div className="education">

            <div className="education-year">
              B.Sc.
            </div>

            <div>

              <p>DEGREE</p>

              <h3>
                Bachelor of Science in Information Technology
              </h3>

              <span>
                B.Sc. IT
              </span>

            </div>

          </div>

        </section>

        {/* Contact */}
        <section id="contact" className="section contact-section">

          <div className="section-heading">

            <span>05</span>

            <div>
              <p>GET IN TOUCH</p>
              <h2>Contact</h2>
            </div>

          </div>

          <div className="contact-layout">

            <div className="contact-message">

              <h3>
                Let's build something together.
              </h3>

              <p>
                I'm open to frontend opportunities,
                projects and collaborations.
              </p>

              <a
                href="mailto:rutikdongare777@gmail.com"
                className="email"
              >
                rutikdongare777@gmail.com
              </a>

            </div>

            {/* Contact Links */}

            <div className="contact-list">

              <a href="tel:9011109035">

                <span className="contact-icon">
                  <FaPhone />
                </span>

                <div>
                  <span>Mobile</span>
                  <strong>9011109035</strong>
                </div>

              </a>

              <a href="mailto:rutikdongare777@gmail.com">

                <span className="contact-icon">
                  <FaEnvelope />
                </span>

                <div>
                  <span>Email</span>
                  <strong>
                    rutikdongare777@gmail.com
                  </strong>
                </div>

              </a>

              <a href="#contact">

                <span className="contact-icon">
                  <FaInstagram />
                </span>

                <div>
                  <span>Instagram</span>
                  <strong>
                    Add Instagram Link
                  </strong>
                </div>

              </a>

              <a href="#contact">

                <span className="contact-icon">
                  <FaGithub />
                </span>

                <div>
                  <span>GitHub</span>
                  <strong>
                    Add GitHub Link
                  </strong>
                </div>

              </a>

              <a href="#contact">

                <span className="contact-icon">
                  <FaLinkedin />
                </span>

                <div>
                  <span>LinkedIn</span>
                  <strong>
                    Add LinkedIn Link
                  </strong>
                </div>

              </a>

            </div>

          </div>

        </section>

      </main>

      {/* Footer */}

      <footer>

        <div>
          <strong>Rutik Narayan Dongare</strong>
          <span>Frontend Developer</span>
        </div>

        <p>
          © 2026 Rutik Dongare. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;