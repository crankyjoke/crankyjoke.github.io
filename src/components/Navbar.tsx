import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">Crankyjoke</div>

            <ul className="nav-links">
                <li><a href="/">Main</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/contact">Contact</a></li>

            </ul>
        </nav>
    );
};

export default Navbar;
