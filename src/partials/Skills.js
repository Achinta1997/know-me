import "./Skills.css"
import { motion } from "framer-motion";

const Skills=()=>{

    return(
        <motion.div className="skills" >
        <motion.h3 className="skill-title" variants={{
            hidden:{opacity:0, x:-75},
            visible: {opacity:1, x:0}
          }}
          initial="hidden"
          animate="visible"
          transition={{duration:0.5 ,delay:0.25}}>Skills</motion.h3>
        <hr />
        <div className="skill-icons">
        <motion.ul variants={{
            hidden:{opacity:0, x:75},
            visible: {opacity:1, x:0}
          }}
          initial="hidden"
          animate="visible"
          transition={{duration:0.5 ,delay:0.25}}>
            <li><motion.i whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}class="fa-brands fa-html5"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 class="fa-brands fa-css3-alt"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 class="fa-brands fa-bootstrap"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 class="fa-brands fa-js"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 class="fa-brands fa-react"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 class="fa-brands fa-node"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 class="fa-solid fa-database"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 class="fa-solid fa-server"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 class="fa-brands fa-linux"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 class="fa-brands fa-git-alt"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 class="fa-duotone fa-c"></motion.i></li>
            <li><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
 class="fa-solid fa-file-excel"></motion.i></li>
        </motion.ul>
        </div>
        
        </motion.div>
    );
}

export default Skills;