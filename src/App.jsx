import React, { useState, useEffect } from 'react';
import './App.css';
import About from './page/about.jsx';
import New from './page/new.jsx';
import Project from './page/project.jsx';
import Home from './page/home.jsx'
import Other from './page/other.jsx'

function App() {
  useEffect(() => {
      // console spem
  let i = 0;

  while (i < 100) {
    console.log(`YOU CAN'T COPY OR SEE CODE AND CONSOLE 🐇🐇🐇🐇 ${i}`);
    i++;
  }

}, []);

  const [activeContent, setActiveContent] = useState('home');

  const handleClick = (content) => {
    setActiveContent(content);
  };


  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  if (screenWidth < 500 && screenHeight < 750) {
    //var image = document.getElementById("icon1");
    //image.parentNode.removeChild(image);
    console.log("screen too small remove icon");
    alert("screen too small pls use screen 500x750 UP");
  }


  return (
    <div>
      <div class='headbar'>
        <ul>
          <li><a class={`${activeContent === 'home' ? 'active' : ''}`} href="#home" onClick={() => handleClick('home')}>Home</a></li>
          <li><a class={`${activeContent === 'new' ? 'active' : ''}`} href="#new" onClick={() => handleClick('new')}>News</a></li>
          <li><a class={`${activeContent === 'project' ? 'active' : ''}`} href="#project" onClick={() => handleClick('project')}>Project</a></li>
          <li><a class={`${activeContent === 'about' ? 'active' : ''}`} href="#about" onClick={() => handleClick('about')}>About</a></li>
          <li><a class={`${activeContent === 'other' ? 'active' : ''}`} href="#other" onClick={() => handleClick('other')}>Other</a></li>
        </ul>
      </div>
      <div id="home" className={`content ${activeContent === 'home' ? 'active' : ''}`}>
        <Home />
      </div>
      <div id="new" className={`content ${activeContent === 'new' ? 'active' : ''}`}>
        <New />
      </div>
      <div id="project" className={`content ${activeContent === 'project' ? 'active' : ''}`}>
        <Project />
      </div>
      <div id="about" className={`content ${activeContent === 'about' ? 'active' : ''}`}>
        <About />
      </div>
      <div id="other" className={`content ${activeContent === 'other' ? 'active' : ''}`}>
        <Other />
      </div>
    </div>
  );
}

export default App;