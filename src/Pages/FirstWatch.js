import "./Main.css";
import React, { useState, useEffect } from "react";
import idea from "../Images/idea.png";
import research from "../Images/research.png";
import sketch from "../Images/sketch.png";
import iteration from "../Images/iteration.png";
import digitalDesign from "../Images/digitalDesign.png";
import feedback from "../Images/feedback.png";
import presentation from "../Images/presentation.png";
import develop from "../Images/develop.png"
import figma from "../Images/figma.png";
import overallApp from "../Images/overallfirstwatch.png"
import android from "../Images/android.png";
import github from "../Images/github.png";
import PowerPoint from "../Images/powerpoint.png";

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
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/landing">Home</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="ContainerWrapper">
        <div className="ContainerProject">
          <h1>Problem Statement</h1>
          <p className="problemStatement">
            Improving Efficiency in Real-Time Alarm Management: Designing a
            mobile application for First Watch Cybersecurity to streamline Alarm
            and event visualization, complementing the main web Platform for
            comprehensive report generation and advanced tools.
          </p>

          <h1>Solution</h1>
          <li>
            <ul className="ListHeaders">High-Fidelity Wireframes</ul>
            <ul>
              • Collaboratively discussed and designed the application's pages
              with the client, emphasizing the need for swift event and alarm
              monitoring without detracting from the First Watch Platform's
              extensive controls.
              <br></br>• Developed high-fidelity wireframes in Figma, allowing
              for interactive prototype testing and refinement to ensure
              intuitive user navigation and functionality.
            </ul>

            <ul className="ListHeaders">User Testing and Client Meetings</ul>
            <ul>
              • Conducted regular client meetings to establish a strong rapport
              and gather feedback on project progress and deliverables
              <br></br>• Incorporated client feedback into the wireframes and
              design iterations, ensuring alignment with their requirements and
              preferences while managing a heavy workload from other projects.
            </ul>

            <ul className="ListHeaders">Development Phase</ul>
            <ul>
              • Focused on developing the mobile application for the Android
              platform, as recommended by the client due to time constraints.
              <br></br>• Utilized Android in Java to create the application,
              organizing workflow with dedicated branches on GitHub for each
              team member's assigned page development.
              <br></br>• Initially prioritized building the basic UI before
              implementing functionality, ensuring a solid foundation.
            </ul>

            <ul className="ListHeaders">Additional Enhancements</ul>
            <ul>
              • Leveraged dark mode to reduce eye strain in low-light settings
              and improve overall usability, prioritizing user comfort and
              immersion during alarm monitoring tasks.
            </ul>

            <ul className="ListHeaders">Final Presentation and Delivery</ul>
            <ul>
              • Created a comprehensive PowerPoint presentation to showcase the
              mobile application's features, design, and functionality.
              <br></br>• Provided a detailed walkthrough of the application's
              interface, navigation flow, and key features, allowing the client
              to experience its usability firsthand.
              <br></br>• Addressed any questions or concerns raised during the
              presentation, ensuring transparency and alignment with client
              expectations.
              <br></br>• Utilized the presentation as a valuable opportunity to
              communicate the project's progress, achievements, and future
              development plans effectively.
            </ul>
          </li>

          <h1>Design Process</h1>
          <div class="DesignProcessContainer">
            <div class="ImageContainer">
              <img
                className="DesignProcess-icon"
                src={research}
                alt="research"
              />
              <h2>
                <br></br>Research
              </h2>
            </div>
            <div class="ImageContainer">
              <img className="DesignProcess-icon" src={idea} alt="idea" />
              <h2>
                <br></br>Ideation
              </h2>
            </div>
            <div class="ImageContainer">
              <img className="DesignProcess-icon" src={sketch} alt="sketch" />
              <h2>
                Wireframing and <br></br>Prototyping
              </h2>
            </div>
            <div class="ImageContainer">
              <img
                className="DesignProcess-icon"
                src={digitalDesign}
                alt="digitalDesign"
              />
              <h2>
                Usability<br></br>Testing
              </h2>
            </div>
            <div class="ImageContainer">
              <img
                className="DesignProcess-icon"
                src={develop}
                alt="develop"
              />
              <h2>
              <br></br> Implementation 
              </h2>
            </div>
            <div class="ImageContainer">
              <img
                className="DesignProcess-icon"
                src={feedback}
                alt="feedback"
              />
              <h2>
                <br></br>Feedback
              </h2>
            </div>
            <div class="ImageContainer">
              <img
                className="DesignProcess-icon"
                src={iteration}
                alt="iteration"
              />
              <h2>
                <br></br>Iteration
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
            <h3>Android Studio (Java) ∙ GitHub ∙ Figma ∙ Microsoft PowerPoint </h3>
            <img className="ProjectDetails-icon" src={android} alt="android" />
            <img className="ProjectDetails-icon" src={github} alt="github" />
            <img className="ProjectDetails-icon" src={figma} alt="figma" />
            <img className="ProjectDetails-icon" src={PowerPoint} alt="PowerPoint" />
          </div>
          <div className="ContainerProject2">
            <h1>Wireframes</h1>
            <p>
              Here are the high-fidelty wireframes that I worked on in Figma,
              feel free to click on the image to view it in fullscreen!
            </p>
            <div class="button-container">
              <a
                href="https://figma.fun/tzB4SR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>High-Fidelity wireframes (Figma)</button>
              </a>
            </div>
            <img src={overallApp} />
          </div>
      </div>
      </div>
    </>
  );
}
