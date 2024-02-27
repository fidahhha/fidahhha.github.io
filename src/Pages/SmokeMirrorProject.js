import "./Main.css";
import React, { useState, useEffect } from "react";
import idea from "../Images/idea.png";
import research from "../Images/research.png";
import sketch from "../Images/sketch.png";
import digitalDesign from "../Images/digitalDesign.png";
import feedback from "../Images/feedback.png";
import presentation from "../Images/presentation.png";
import illustrator from "../Images/illustrator.png";
import indesign from "../Images/indesign.png";
import processbook from "../Media/processBook.pdf";
import poster from "../Images/Poster.jpg";
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
        </nav>
        <div className="ContainerWrapper">
          <div className="ContainerProject">
            <h1>Problem Statement</h1>
            <p className="problemStatement">
              The objective of this project is to develop a visually appealing
              poster using Adobe Illustrator and a comprehensive process book
              using Adobe InDesign to showcase the projects undertaken by
              students enrolled in COMPX241-21A at the University of Waikato's
              Software Engineering program. The poster and process book should
              effectively communicate the innovative intersections of technology
              and creativity represented in the Smoke and Mirrors showcase. The
              challenge lies in demonstrating a proficient understanding of
              Illustrator and InDesign while selecting appropriate design styles
              that capture the essence of the showcased projects and engage the
              target audience effectively.
            </p>

            <h1>Solution</h1>
            <li>
              <ul className="ListHeaders">Research and Understanding</ul>
              <ul>
                • Conduct research on the what Smoke and Mirrors mean to us then
                analyze various design styles and trends to determine the most
                suitable approach for the poster and process book.
              </ul>

              <ul className="ListHeaders">Design Concept Development</ul>
              <ul>
                • Develop a clear concept for both the poster and the process
                book considering elements such as sleek typography, dynamic
                visuals, and cohesive color schemes to create visually appealing
                designs.
              </ul>

              <ul className="ListHeaders">Adobe Development</ul>
              <ul>
                • Utilize Adobe Illustrator to design the poster, ensuring
                high-quality graphics and attention-grabbing visuals and Adobe
                InDesign to create a process book that documents the design
                process, inspiration, and execution of the poster.
              </ul>

              <ul className="ListHeaders">Iterative Feedback and Revision</ul>
              <ul>
                • Seek feedback from peers, instructors, and stakeholders to
                identify areas for improvement in both the poster and the
                process book.
              </ul>

              <ul className="ListHeaders">Final Presentation and Delivery</ul>
              <ul>
                • Prepare the final versions of the poster and process book for
                presentation.
              </ul>
            </li>

            <h1 className="DesignProcessHeader">Design Process</h1>
            <div class="DesignProcessContainer">
              <div class="ImageContainer">
                <img
                  className="DesignProcess-icon"
                  src={research}
                  alt="research"
                />
                <h2>
                  Research and<br></br>Understanding
                </h2>
              </div>
              <div class="ImageContainer">
                <img className="DesignProcess-icon" src={idea} alt="idea" />
                <h2>
                  Concept<br></br>Development
                </h2>
              </div>
              <div class="ImageContainer">
                <img className="DesignProcess-icon" src={sketch} alt="sketch" />
                <h2>
                  Sketching and<br></br>Wireframing
                </h2>
              </div>
              <div class="ImageContainer">
                <img
                  className="DesignProcess-icon"
                  src={digitalDesign}
                  alt="digitalDesign"
                />
                <h2>
                  <br></br>Digital Design
                </h2>
              </div>
              <div class="ImageContainer">
                <img
                  className="DesignProcess-icon"
                  src={feedback}
                  alt="feedback"
                />
                <h2>
                  Iterative Design<br></br>and Feedback
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
            <h3>Adobe Illustrator ∙ Adobe InDesign </h3>
            <img
              className="ProjectDetails-icon"
              src={illustrator}
              alt="illustrator"
            />
            <img
              className="ProjectDetails-icon"
              src={indesign}
              alt="indesign"
            />
          </div>
          
          <div className="ContainerProject2">
            <iframe
              src={processbook} // Use the imported variable
              title="PDF Viewer"
            ></iframe>
            <img className="Poster"
              src={poster}
              alt="poster"
            />
          </div>
        </div>
      </div>
    </>
  );
}
