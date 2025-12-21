import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">Crankyjoke</div>

            <ul className="nav-links">
                <li><Link to="/">Main</Link></li>
                <li><Link to="/bout">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to ="/games">Game</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
