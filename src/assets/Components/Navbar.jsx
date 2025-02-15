import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaEnvelope, FaMapMarkedAlt, FaNewspaper, FaBell, FaSignInAlt, FaCaretDown } from 'react-icons/fa';
import './Navbar.css';
import cm from './cm.jpg';

const Navbar = ({ onOpenMap, onOpenSignIn, onOpenAbout, onOpenCamera }) => { // Added onOpenCamera prop
    const [isOpen, setIsOpen] = useState(false);
    const [activeElement, setActiveElement] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleElementClick = (element, callback) => {
        setActiveElement(element);
        callback();
    };

    const renderNavLinks = () => {
        if (activeElement) {
            return (
                <li>
                    <button onClick={() => setActiveElement(null)}>
                        <FaCaretDown /> Back
                    </button>
                </li>
            );
        }
        return (
            <>
                <li><button onClick={() => handleElementClick('about', onOpenAbout)}><FaEnvelope /> About Us</button></li>
                <li><button onClick={() => handleElementClick('map', onOpenMap)}><FaMapMarkedAlt /> Map</button></li>
                <li><button onClick={() => handleElementClick('camera', onOpenCamera)}><FaNewspaper /> Camera</button></li> {/* Updated Camera button */}
                <li><Link to="/notifications" onClick={() => handleElementClick('notifications', () => {})}><FaBell /> Notifications</Link></li>
                <li><button onClick={() => handleElementClick('signIn', onOpenSignIn)}><FaSignInAlt /> Sign In</button></li>
            </>
        );
    };

    return (
        <nav className="navbar">
            <img src={cm} className="logo" alt="" /><span><h2>Safe Route</h2></span>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                {renderNavLinks()}
            </ul>
            <div className="burger" onClick={toggleMenu} aria-expanded={isOpen} aria-controls="nav-menu">
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    );
};

export default Navbar;
