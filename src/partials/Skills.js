import { useEffect, useRef } from "react";
import "./Skills.css"
import { motion, useAnimation, useInView } from "framer-motion";

const Skills=()=>{

  const ref=useRef(null);
    const isInView= useInView(ref,{once:true});

    const mainControls=useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isInView]);

    return(
        <motion.div className="skills" >
        <motion.h3 ref={ref} className="skill-title" variants={{
            hidden:{opacity:0, x:-75},
            visible: {opacity:1, x:0}
          }}
          initial="hidden"
          animate={mainControls}
          transition={{duration:0.5 ,delay:0.25}}>Skills <i class="fa-solid fa-code"></i> </motion.h3>
        <hr />
        <div className="skill-icons">
        <motion.ul ref={ref} variants={{
            hidden:{opacity:0, x:75},
            visible: {opacity:1, x:0}
          }}
          initial="hidden"
          animate={mainControls}
          transition={{duration:0.5 ,delay:0.25}}>
            <li><motion.i whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className="fa-brands fa-html5 skill-item"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 className="fa-brands fa-css3-alt skill-item"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 className="fa-brands fa-bootstrap skill-item"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 className="fa-brands fa-js skill-item"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 className="fa-brands fa-react skill-item"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 className="fa-brands fa-node skill-item"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 className="fa-solid fa-database skill-item"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 className="fa-solid fa-server skill-item"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 className="fa-brands fa-linux skill-item"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 className="fa-brands fa-git-alt skill-item"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 className="fa-duotone fa-c skill-item"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 className="fa-solid fa-file-excel skill-item"></motion.i></li>
        </motion.ul>
        </div>
        
        </motion.div>
    );
}

export default Skills;