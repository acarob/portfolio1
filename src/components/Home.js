import React from "react";
import "../stylesheets/Home.css";

function Home() {
  return (
    <div className="home-container">
      <img
        className="home-image"
        src={require(`../images/HomeGif1.gif`)}
        alt="not found"
      />
      <div className="title-container">
        <h1>Hi! I am Andrea Barrera</h1>
        <br></br>
        <h3>FrontEnd Developer & B.A. in English</h3>
        <br></br>
        <h4>Based in Colombia</h4>
      </div>
    </div>
  );
}

export default Home;
