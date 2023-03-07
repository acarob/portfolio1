import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <div className="main-title">
            <h1>My Portfolio</h1>
          </div>
          <div className="home-section">
            <Home />
          </div>
          <Navbar />
          <div className="about-section">
            <AboutMe
              image="fotoHV"
              name="Andrea Barrera"
              charge1="FrontEnd Developer"
              charge2="B.A. in English"
              text="Along my studies I worked in the creation of an e-commerce used to sell bicycles and have been an English teacher for almost ten years. I learn fast, work well in teams, have a great capacity to adapt myself to changes, and great communication skills."
            />
            <div>
              <Skills />
              <ContactMe />
            </div>
          </div>
        </div>
        <div>
          <div className="secondary-title">
            <h1>My Experience</h1>
          </div>
          <div className="experience-section-1">
            <Experience
              position="FrontEnd Developer (apprenticeship)"
              enterprise="Soy Henry"
              dates="Dec. 2022 - Jan. 2023"
              description="I worked with a team during the creation of an e-commerce of bicycles. In which there are four kinds of users (super admin, general admin, buyer and invited). During the development of the platform I was in charged of the design, layout and styles mainly.
        The following technologies were used during the process of creation of the project:
        React.js, Redux, MongoDB, Node.js, Bulma.io, MaterialUI, Express.js."
            />
            <Experience
              position="Full-Stack Developer (apprenticeship)"
              enterprise="Soy Henry"
              dates="Nov. 2022 - Dec. 2022"
              description="I idependently worked in the creation of a Single-Page application that uses information from an API about videogames. 
        Used technologies: JavaScript, React.js, Redux, CSS, HTML, Node.js, Sequelize, PostgreSQL."
            />
            <Experience
              position="Full-Stack Teaching Assistant"
              enterprise="Soy Henry"
              dates="Nov. 2022 - Dec. 2022"
              description="Bootcamp Teaching Assistant (TA) for Full-Stack Development Students. Main tasks: Coordinate a group of students to achieve integration to the study group. Guide students in the first steps of the course. Assist to solve exercises and promote group collaboration (Pair Programming). Propose ideas to improve the Bootcamp processes."
            />
          </div>
          <div className="experience-section-2">
            <Experience
              position="English Teacher"
              enterprise="Comfenalco Tolima"
              dates="Jan. 2019 - Jul. 2022"
              description="Develop English classes; be in charge of the requirements of the students (such as grade their English learning) and to be the main leader and teacher coordinator of a group each year."
            />
            <Experience
              position="English Teacher"
              enterprise="American School Way"
              dates="Ago. 2016 - Dec. 2018"
              description="Teaching English as a foreign language being part of the student's process of learning through different kinds of activities such as immertion classes (visiting museums and participating in tours); teaching grammar and providing pronunciation classes."
            />
            <Experience
              position="English Teacher"
              enterprise="Colombo Americano Ibagué"
              dates="Feb. 2014 - Ago. 2016"
              description="Teaching English as a foreign language being part of the student's process of learning through different kinds of classroom activities."
            />
          </div>
        </div>
        <div>
          <div className="secondary-title">
            <h1>My Projects</h1>
          </div>
          <div className="projects-section-1">
            <Projects
              image="paranoid-bikes"
              description="Bycicle E-commerce (team academic project)."
              name="Paranoid Bikes"
              link="https://github.com/E-Commerce31b/Paranoid-Bikes"
              link2="https://paranoid-bikes-front.onrender.com/"
            />
            <Projects
              image="click-counter"
              name="Clicks Counter"
              description="Game used to count the quantity of clicks made (neon style)."
              link="https://github.com/acarob/clicks-counter"
              link2="https://click-counter-caro.netlify.app/"
            />
            <Projects
              image="fcc-testimonial"
              name="FCC Testimonials"
              description="FreeCodeCamp testimonials website inspired."
              link="https://github.com/acarob/testimonyFCC"
              link2="https://fcc-testimony.netlify.app/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
