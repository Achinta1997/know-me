import { useEffect, useRef } from "react";
import "./Bio.css"
import { motion, useAnimation, useInView } from "framer-motion";

const Bio=()=>{
    const ref=useRef(null);
    const isInView= useInView(ref,{once:true});

    const mainControls=useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isInView]);

    return (
        <div className="bio">
        <p className="bioText">I am Achinta Kumar Dutta, a software engineer based in India with skills of <span className="impText">Web Development</span> <i class="fa-solid fa-globe"></i> and <span className="impText">Middleware Administration</span> <i class="fa-sharp fa-solid fa-gear"></i>. </p>&nbsp;
        <p className="bioText">I love building <span className="impText">responsive websites</span> of general purpose showcase/advertisement and commercial use. I also try out fresh tech as a hobby. Currently, I am exploring <span className="impText">Web3</span> and <span className="impText">DevOps</span>.</p>&nbsp;
        <p className="expBio">
        &nbsp;
            <motion.h3 ref={ref} variants={{
            hidden:{opacity:0, x:-75},
            visible: {opacity:1, x:0}
          }}
          initial="hidden"
          animate={mainControls}
          transition={{duration:0.5 ,delay:0.25}}>Work Experience <i class="fa-solid fa-briefcase"></i></motion.h3>
            <hr />
            

            <motion.p ref={ref} className="bioText" variants={{
            hidden:{opacity:0, y:75},
            visible: {opacity:1, y:0}
          }}
          initial="hidden"
          animate={mainControls}
          transition={{duration:0.5 ,delay:0.25}}>I have been working as Assistant System Engineer at <span className="impText">Tata Consultancy Services</span>.</motion.p>
        </p>
        </div>
    )
}

export default Bio;