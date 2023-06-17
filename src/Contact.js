import './Contact.css'

const Contact =()=>{
    return(
        <div id="contact">
        <div className='contact-icons'>
        <i className="fa-brands fa-github contact-item"></i>
        <i className="fa-brands fa-linkedin contact-item"></i>
        <i className="fa-brands fa-facebook contact-item"></i>
        <i className="fa-brands fa-instagram contact-item"></i>
        <i className="fa-solid fa-envelope contact-item"></i>
        </div>
        <p className='copyright-text'>Copyright @Achinta</p>
        </div>
    );
}

export default Contact;