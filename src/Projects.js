import { useEffect, useRef } from 'react';
import './Projects.css'
import Card from './partials/Card';
import CardData from "./partials/CardData"
import { motion, useAnimation, useInView } from 'framer-motion';

function createCard(props){
    return <Card 
        key={props.id}
        title={props.title}
        imgUrl={props.imgUrl}
        altImg={props.altImg}
        description={props.description}
        link={props.link}
        code={props.code}
    />
}

const Projects =()=>{

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
        <div className="project" id="projects">
            <motion.h3 ref={ref} variants={{
            hidden:{opacity:0, x:-75},
            visible: {opacity:1, x:0}
          }}
          initial="hidden"
          animate={mainControls}
          transition={{duration:0.5 ,delay:0.25}} className='head'>Projects <i className="fa-solid fa-diagram-project"></i></motion.h3>
            <hr />

            <p className='cards'> 
            {CardData.map(createCard)}
            </p>
            
            </div>
    );
}

export default Projects;