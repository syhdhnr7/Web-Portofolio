import React from 'react';
import '../assets/Home.css';

function Home({ scrollToAbout }) {
  return (
    <div className="home-container">
      <div className="content">
        <h5>Get to know me</h5>
        <h1>NUR SYAHIDAH</h1>
        <p>
          As a dedicated Informatics Engineering student focusing on Web Development and UI/UX Design, I utilize React.js to develop engaging frontend applications and Figma to create intuitive prototypes. My aim is to deliver user-centered solutions that effectively combine functionality and aesthetic appeal. I invite you to explore my portfolio and discover how my skills can contribute to your projects.
        </p>
        <button className="resume-button" onClick={scrollToAbout}>My Resume</button>
      </div>
      <div className="image-container">
        <img src="https://i.pinimg.com/736x/48/dd/d6/48ddd6f4a98e93e44d65cb8b1d157c9d.jpg" alt="Nur Syahidah" />
      </div>
    </div>
  );
}

export default Home;