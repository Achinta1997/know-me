import './Projects.css'
import Card from './partials/Card';
import CardData from "./partials/CardData"
import { motion } from 'framer-motion';

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

    return(
        <div className="project">
            <motion.h3 variants={{
            hidden:{opacity:0, x:-75},
            visible: {opacity:1, x:0}
          }}
          initial="hidden"
          animate="visible"
          transition={{duration:0.5 ,delay:0.25}} className='head'>Projects <i className="fa-solid fa-diagram-project"></i></motion.h3>
            <hr />

            <p className='cards'> 
            {CardData.map(createCard)}
            </p>
            
            </div>
    );
}

export default Projects;