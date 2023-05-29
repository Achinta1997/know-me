import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';

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
       <Projects />
    </div>
  );
}

export default App;

