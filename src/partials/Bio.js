import "./Bio.css"

const Bio=()=>{
    return (
        <div className="bio">
        <p className="bioText">I am Achinta Kumar Dutta, a software engineer based in India with skills of <span className="impText">Web Development</span> <i class="fa-solid fa-globe"></i> and <span className="impText">Middleware Administration</span> <i class="fa-sharp fa-solid fa-gear"></i>. </p>&nbsp;
        <p className="bioText">I love building <span className="impText">responsive websites</span> of general purpose showcase/advertisement and commercial use. I also try out fresh tech as a hobby. Currently, I am exploring <span className="impText">Web3</span> and <span className="impText">DevOps</span>.</p>&nbsp;
        <p className="expBio">
        &nbsp;
            <h3>Work Experience <i class="fa-solid fa-briefcase"></i></h3>
            <hr />
            <p className="bioText">I have been working as Assistant System Engineer at <span className="impText">Tata Consultancy Services</span>.</p>
        </p>
        </div>
    )
}

export default Bio;