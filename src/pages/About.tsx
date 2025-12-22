import './About.css'


const aboutParagraph = "I am a Computer Engineering student at the University of Waterloo with a minor in " +
    "Combinatorics & Optimization. I like building things that’s low-level firmware, backend systems, or AI-powered tools.\n" +
    "\n" +
    "I’ve worked on a mix of projects and roles, from writing embedded C/C++ firmware for satellite hardware with UW Orbital, " +
    "to building backend services with Spring Boot and MySQL, to deploying and testing AI models on Azure. I’ve also been a Software Engineering TA, " +
    "where I built an AI-based autograder and helped students design application as well as debug memory leaks, SQL queries, and Git issues.\n" +
    "\n" +
    "I enjoy digging into how systems actually work under the hood and solving challenging problems along the way. Outside of classes and internships, " +
    "I like working on side projects such as like decentralized WebAssembly execution at the edge, and full-stack apps with authentication and role-based access control.\n" +
    "\n" +
    "I’m always learning, experimenting, and looking for interesting problems to work on. "

export default function About(){
    return(
        <div className="about-page">
            <div className="about-panel">
                <h1>
                    About me
                </h1>
                <div className="about-text">
                    {aboutParagraph}
                </div>
            </div>
        </div>
    )
}