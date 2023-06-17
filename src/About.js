import { useEffect,useRef } from 'react';
import { init } from 'ityped';
import { motion } from 'framer-motion';

import './About.css'
import introImage from './assets/achinta1.png'

const About =()=>{

    const textRef =useRef();
useEffect(()=>{
  init(textRef.current, { 
    showCursor: true,
    backDelay :1500,
     strings: ['Web Developer..','Middleware Administrator'] })
},[])

    return(
        <div className="about">
          <div className='introText'>

          <motion.h2 variants={{
            hidden:{opacity:0, y:75},
            visible: {opacity:1, y:0}
          }}
          initial="hidden"
          animate="visible"
          transition={{duration:0.5 ,delay:0.25}}
          >Hey , I am Achinta.
          </motion.h2>
              <br />

          <motion.p  initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2 }}>I am a <span ref={textRef}></span></motion.p>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2 }} className='introImageBox'><img src={introImage} alt='Achinta'></img>
    </motion.div>
   
        </div>
    );
}

export default About;