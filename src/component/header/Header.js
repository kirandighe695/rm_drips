import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../../styles/assests/rmdripslogo.png";
import "../../styles/Header.scss"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => {
        setMenuOpen(false);
        setAboutOpen(false);
        setProductsOpen(false);
    };

    const isActive = (path) =>
        location.pathname === path ? "nav-link active" : "nav-link";

    const getDropdownActiveClass = (paths) => {
        return paths.some((path) => location.pathname === path)
            ? "nav-link active"
            : "nav-link";
    };

    const NavLinks = ({ isMobile = false }) => (
        <ul className={isMobile ? "mobile-nav" : "desktop-nav"}>
            <li>
                <Link to="/" className={isActive("/")} onClick={closeMenu}>
                    Home
                </Link>
            </li>

            <li className={isMobile ? "mobile-dropdown" : "dropdown"}>
                <span
                    className={getDropdownActiveClass([
                        "/about",
                        "/directors",
                        "/kmp",
                        "/operations",
                        "/achievements",
                        "/exhibitions",
                        "/committees",
                    ])}
                    onClick={isMobile ? () => setAboutOpen(!aboutOpen) : undefined}
                >
                    About Us <FaChevronDown className={aboutOpen ? "rotate" : ""} />
                </span>
                <ul
                    className={
                        isMobile
                            ? aboutOpen
                                ? "dropdown-menu show"
                                : "dropdown-menu"
                            : "dropdown-menu"
                    }
                >
                    <li>
                        <Link to="/about" className={isActive("/about")} onClick={closeMenu}>
                            About R M Drips
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/directors"
                            className={isActive("/directors")}
                            onClick={closeMenu}
                        >
                            Board of Directors
                        </Link>
                    </li>
                    <li>
                        <Link to="/kmp" className={isActive("/kmp")} onClick={closeMenu}>
                            KMP
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/operations"
                            className={isActive("/operations")}
                            onClick={closeMenu}
                        >
                            International Operations
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/achievements"
                            className={isActive("/achievements")}
                            onClick={closeMenu}
                        >
                            Achievements
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/exhibitions"
                            className={isActive("/exhibitions")}
                            onClick={closeMenu}
                        >
                            Exhibitions
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/committees"
                            className={isActive("/committees")}
                            onClick={closeMenu}
                        >
                            Board Committees
                        </Link>
                    </li>
                </ul>
            </li>

            <li className={isMobile ? "mobile-dropdown" : "dropdown"}>
                <span
                    className={getDropdownActiveClass(["/product", "/dealer"])}
                    onClick={isMobile ? () => setProductsOpen(!productsOpen) : undefined}
                >
                    Products <FaChevronDown className={productsOpen ? "rotate" : ""} />
                </span>
                <ul
                    className={
                        isMobile
                            ? productsOpen
                                ? "dropdown-menu show"
                                : "dropdown-menu"
                            : "dropdown-menu"
                    }
                >
                    <li>
                        <Link
                            to="/product"
                            className={isActive("/product")}
                            onClick={closeMenu}
                        >
                            Product Details
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dealer"
                            className={isActive("/dealer")}
                            onClick={closeMenu}
                        >
                            Dealer Network
                        </Link>
                    </li>
                </ul>
            </li>

            <li>
                <Link
                    to="/facilities"
                    className={isActive("/facilities")}
                    onClick={closeMenu}
                >
                    Facilities
                </Link>
            </li>
            <li>
                <Link
                    to="/investors"
                    className={isActive("/investors")}
                    onClick={closeMenu}
                >
                    Investors
                </Link>
            </li>
            <li>
                <Link to="/event" className={isActive("/event")} onClick={closeMenu}>
                    Events
                </Link>
            </li>
            <li>
                <Link
                    to="/contact"
                    className={isActive("/contact")}
                    onClick={closeMenu}
                >
                    Contact
                </Link>
            </li>
        </ul>
    );

    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <img src={logo} alt="R M Drips Logo" />
                </Link>

                <nav className="nav-links">
                    <NavLinks />
                </nav>

                <button className="menu-btn" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <NavLinks isMobile />
            </div>

            {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
        </header>
    );
}

export default Header;
