import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Gmail from "./Images/gmail-logo.png";
import UoW from "./Images/UoW.png";
import Kawena from "./Images/kawena.png";
import FirstWatch from "./Images/firstwatch.png";
import linkedIn from "./Images/linkedin.png";
import background from "./Images/tester.jpg";
import { Link } from "react-router-dom";
export default function App() {
  const navigate = useNavigate();
  const sections = [
    {
      leftContent: (
        <div>
          <h3 className="Initials">FFA</h3>
          <h2>Aspiring UX/UI designer and Front End Developer</h2>
          <h1>Fidah Fareeha Ali</h1>
          <p className="paragraph1">
            As a recent graduate of the University of Waikato with a double
            major in Computer Science and Media Design, I'm passionate about
            merging technology and aesthetics. UX/UI design has captured my
            heart, I thrive on creating visually captivating and user-friendly
            experiences. My journey at this intersection has honed my skills and
            instilled a deep appreciation for both technical and artistic
            aspects of design. Eager to innovate and contribute, I stay updated
            on the latest trends to create meaningful user experiences.
          </p>
          <Link to="/about" className="More">More about me ⟶</Link>

          <p className="Connection">Lets Connect:</p>
          <div className="connection-images">
            <a
              href="https://www.linkedin.com/in/fidah-ali/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} alt="linkedIn" />
            </a>
            <a href="mailto:alifidah2902@gmail.com">
              <img src={Gmail} alt="Gmail" />
            </a>
          </div>
        </div>
      ),
      rightContent: (
        <div className="section-content">
          <div className="navbarLanding">
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/landing">Home</Link>
              </li>
            </ul>
          </div>
          <img src={background} alt="Section 2 Image" />
        </div>
      ),
    },
    {
      leftContent: (
        <div>
          <h2>Android Alarms App</h2>
          <h1>First Watch</h1>
          <h3 className="Tools">
            Figma ‣ Android Studio (Java) ‣ Microsoft PowerPoint ‣ GitHub
          </h3>
          <p>
            This Android solution delivers real-time alarms and event
            management, prioritizing user experience. The team navigated client
            feedback, resulting in a sleek interface and efficient
            functionality. Noteworthy features include visualization graphs and
            a dark-mode option. This project represents academic-industry
            synergy.
          </p>
          <Link to="/FirstWatch" className="More">View full project ⟶</Link>

          <p className="Connection">Lets Connect:</p>
          <div className="connection-images">
            <a
              href="https://www.linkedin.com/in/fidah-ali/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} alt="linkedIn" />
            </a>
            <a href="mailto:alifidah2902@gmail.com">
              <img src={Gmail} alt="Gmail" />
            </a>
          </div>
        </div>
      ),
      rightContent: (
        <div className="section-content">
          <div className="navbarLanding">
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/landing">Home</Link>
              </li>
            </ul>
          </div>
          <img src={FirstWatch} alt="Section 2 Image" />
        </div>
      ),
    },
    {
      leftContent: (
        <div>
          <h2>Small Business Website</h2>
          <h1>Kawena Designs</h1>
          <h3 className="Tools">Figma ‣ Next.JS ‣ Adobe Photoshop</h3>
          <p>
            A personal project by Fidah Ali celebrating fashion and jewelry from
            Oahu, Hawaii. Collaborating with Kesaia a close friend of mine,
            we're crafting a visually striking website with 70s-inspired
            aesthetics. From mood boards to wireframes, our journey focuses on
            seamless design and cultural celebration. Currently developing with
            Next.js, stay tuned for updates as we bring Kawena Designs to life!
          </p>
          <Link to="/Kawena" className="More">View full project ⟶</Link>

          <p className="Connection">Lets Connect:</p>
          <div className="connection-images">
            <a
              href="https://www.linkedin.com/in/fidah-ali/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} alt="linkedIn" />
            </a>
            <a href="mailto:alifidah2902@gmail.com">
              <img src={Gmail} alt="Gmail" />
            </a>
          </div>
        </div>
      ),
      rightContent: (
        <div className="section-content">
          <div className="navbarLanding">
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/landing">Home</Link>
              </li>
            </ul>
          </div>
          <img src={Kawena} alt="Section 3 Image" />
        </div>
      ),
    },
    {
      leftContent: (
        <div>
          <h2>Content Management System App</h2>
          <h1>University</h1>
          <h3 className="Tools">Android Studio (Java) ‣ GitLab</h3>
          <p>
            Content Management System (CMS) app, an Android application
            developed for a university project. A robust CMS adhering to
            specific requirements, with the design already predefined. Utilizing
            best practices, we embarked on the development journey, employing
            GitLab for version control. The project was segmented into sections,
            with systematic commits ensuring organized tracking of progress.
          </p>
          <Link to="/UOW" className="More">View full project ⟶</Link>

          <p className="Connection">Lets Connect:</p>
          <div className="connection-images">
            <a
              href="https://www.linkedin.com/in/fidah-ali/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} alt="linkedIn" />
            </a>
            <a href="mailto:alifidah2902@gmail.com">
              <img src={Gmail} alt="Gmail" />
            </a>
          </div>
        </div>
      ),
      rightContent: (
        <div className="section-content">
          <div className="navbarLanding">
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/landing">Home</Link>
              </li>
            </ul>
          </div>
          <img src={UoW} alt="Section 4 Image" />
        </div>
      ),
    },
  ];
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const currentSectionIndex = Math.floor(currentScrollPos / windowHeight);
      setCurrentSection(currentSectionIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown" && currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1);
      } else if (event.key === "ArrowUp" && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection]);

  const handleScrollToSection = (index) => {
    setCurrentSection(index);
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="scroll-nav">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`dot ${index === currentSection ? "active" : ""}`}
            onClick={() => handleScrollToSection(index)}
          />
        ))}
      </div>
      <div className="full-page-container">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`full-page-section ${
              index === currentSection ? "active" : ""
            }`}
            id={`section-${index}`}
          >
            <div className="left-content">{section.leftContent}</div>
            <div className="right-content">{section.rightContent}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
