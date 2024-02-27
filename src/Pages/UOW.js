import "./Main.css";
import React, { useState, useEffect } from "react";
import iteration from "../Images/iteration.png";
import presentation from "../Images/presentation.png";
import understanding from "../Images/understand.png";
import design from "../Images/design.png";
import document from "../Images/document.png";
import android from "../Images/android.png";
import gitlab from "../Images/gitlab.png";
import UoW from "../Images/overall.png";

export default function SmokeMirrors() {
  const [scrolling, setScrolling] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    changeBackground(); // Corrected: Added parentheses to call the function

    window.addEventListener("scroll", changeBackground); // Corrected: Changed the function name

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <div className="HomeContainer">
        <nav className={scrolling ? "navbar active" : "navbar"}>
          <div className="navbar-container">
          <ul>
              <li>
                <a href="/landing">Home</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="ContainerWrapper">
          <div className="ContainerProject">
            <h1>Problem Statement</h1>
            <p className="problemStatement">
              The task involves developing an Android-based Content Management
              System (CMS) app as part of a university project. The objective is
              to create a robust CMS that aligns with predefined requirements
              and adheres to specified design standards.
            </p>

            <h1>Solution</h1>
            <li>
              <ul className="ListHeaders">Requirement Analysis</ul>
              <ul>
                • Conducted a thorough analysis of the specified requirements to
                ensure a clear understanding of project objectives and
                constraints.
              </ul>

              <ul className="ListHeaders">Design Implementation</ul>
              <ul>
                • Implemented the pre-specified design for the application.
              </ul>

              <ul className="ListHeaders">Development Process</ul>
              <ul>
                • Utilized Android development tools and frameworks to build the
                CMS application.
                <br></br>• Implemented features and functionalities according to
                the project requirements.
              </ul>

              <ul className="ListHeaders">Testing and Quality Assurance</ul>
              <ul>
                • Ensured compatibility with a range of Android devices and
                screen sizes to provide a seamless user experience.
              </ul>

              <ul className="ListHeaders">Documentation and Delivery</ul>
              <ul>
                • Prepared the application for delivery, ensuring that it met
                the specified requirements and design standards outlined for the
                university project.
              </ul>
            </li>

            <h1>Design Process</h1>
            <div class="DesignProcessContainer">
              <div class="ImageContainer">
                <img
                  className="DesignProcess-icon"
                  src={understanding}
                  alt="understanding"
                />
                <h2>
                  Requirement<br></br>Analysis
                </h2>
              </div>
              <div class="ImageContainer">
                <img className="DesignProcess-icon" src={design} alt="design" />
                <h2>
                  Design<br></br>Implementation
                </h2>
              </div>
              <div class="ImageContainer">
                <img
                  className="DesignProcess-icon"
                  src={iteration}
                  alt="iteration"
                />
                <h2>
                  Iteration and<br></br>Refinement
                </h2>
              </div>
              <div class="ImageContainer">
                <img
                  className="DesignProcess-icon"
                  src={document}
                  alt="document"
                />
                <h2>
                  <br></br>Documentation
                </h2>
              </div>
              <div class="ImageContainer">
                <img
                  className="DesignProcess-icon"
                  src={presentation}
                  alt="presentation"
                />
                <h2>
                  <br></br>Presentation
                </h2>
              </div>
            </div>
          </div>
          <div className="ContainerProjectDetails">
            <h1>Tools Used</h1>
            <h3>Android Studio (Java) ∙ GitLab</h3>
            <img className="ProjectDetails-icon" src={android} alt="android" />
            <img className="ProjectDetails-icon" src={gitlab} alt="gitlab" />
          </div>
          <div className="ContainerProject2">
          <img
                  className="CMSApplication"
                  src={UoW}
                  alt="overall-project"
                />
          </div>
        </div>
      </div>
    </>
  );
}
