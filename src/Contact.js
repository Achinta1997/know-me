import './Contact.css'

const Contact =()=>{
    return(
        <div id="contact">
        <div className='contact-icons'>
        <a href='https://github.com/Achinta1997' target='blank'><i className="fa-brands fa-github contact-item"></i></a>
        <a href='https://www.linkedin.com/in/achinta-kumar-dutta-a9659354' target='blank'><i className="fa-brands fa-linkedin contact-item"></i></a>
        <a href='https://www.facebook.com/achinta.dutta.52' target='blank'><i className="fa-brands fa-facebook contact-item"></i></a>
        <a href='https://www.instagram.com/achinta_dutta_' target='blank'><i className="fa-brands fa-instagram contact-item"></i></a>
        <a href='mailto:achintadutta1997@gmail.com'><i className="fa-solid fa-envelope contact-item"></i></a>
        </div>
        <p className='copyright-text'>Copyright @Achinta</p>
        </div>
    );
}

export default Contact;