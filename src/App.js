import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Bio from './partials/Bio';
import Skills from './partials/Skills';
import Projects from './Projects';
import Contact from './Contact';

import './App.css';



const App=() =>{
  const [checkDark,setDark]=useState(true);

  const darkChecker=(isDark)=>{
    setDark(isDark);
  }


  return (
    <div className={!checkDark?'App-dark':'App'}>
    <Navbar checkDark={darkChecker}/>
      <About />
      <Bio />
      <Skills />
       <Projects />
       <Contact />  
    </div>
  );
}

export default App;

