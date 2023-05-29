
import './About.css'
import introImage from './assets/achinta1.png'

const About =()=>{

    return(
        <div className="about">
          <div className='introText'><h2>Hey , I am Achinta.</h2>
          <p>I am a Web Developer.</p>
          </div>
          <div className='introImageBox'><img src={introImage} alt='Achinta'></img></div>
        </div>
    );
}

export default About;