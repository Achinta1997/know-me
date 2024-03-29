
import { useEffect, useRef } from 'react';
import './Card.css'
import { motion, useAnimation, useInView } from 'framer-motion';


const Card=(props)=>{

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
        <motion.div ref={ref} variants={{
            hidden:{opacity:0, x:75},
            visible: {opacity:1, x:0}
          }}
          initial="hidden"
          animate={mainControls}
          transition={{duration:0.5 ,delay:0.25}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="card">
        <h3 className='card-content'>{props.title}</h3>
        <img src={props.imgUrl} alt={props.altImg} className='card-content'></img>
        <p className='card-content description'>{props.description}</p>
        <p className='card-content'>
        <a href={props.link} target='blank'>link <i class="fa-solid fa-link"></i></a>
        <a href={props.code} target='blank'>code <i class="fa-solid fa-code"></i></a>
        </p>
        </motion.div>
    );
}

export default Card;

// const [selectedId, setSelectedId] = useState(null)
 
// {items.map(item => (
//   <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
//     <motion.h5>{item.subtitle}</motion.h5>
//     <motion.h2>{item.title}</motion.h2>
//   </motion.div>
// ))}

// <AnimatePresence>
//   {selectedId && (
//     <motion.div layoutId={selectedId}>
//       <motion.h5>{item.subtitle}</motion.h5>
//       <motion.h2>{item.title}</motion.h2>
//       <motion.button onClick={() => setSelectedId(null)} />
//     </motion.div>
//   )}
// </AnimatePresence>