import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <AboutMe
          image="fotoHV"
          name="Andrea Barrera"
          charge1="FrontEnd Developer"
          charge2="B.A. in English"
          text="Along my studies I worked in the creation of an e-commerce used to sell bicycles and have been an English teacher for almost ten       years. I learn fast, work well in teams, have a great capacity to adapt myself to chages, and great communication skills."
        />
      </div>
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
