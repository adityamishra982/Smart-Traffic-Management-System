import React, { useState } from 'react';
import { FaSearch, FaDirections, FaBook, FaTimes } from 'react-icons/fa';
import './Map.css';

const Map = ({ onClose }) => {
    const [searchOpen, setSearchOpen] = useState(false);

    const handleSearchClick = () => {
        setSearchOpen(!searchOpen);
    };

    return (
        <div className="App">
            <div className="sidebar">
                <div className="sidebar-header">
                    
                    <FaTimes className="close-icon" onClick={onClose} />
                </div>
                <a href="#" className={`menu-item ${searchOpen ? 'active' : ''}`} onClick={handleSearchClick}>
                    <FaSearch className="icon" />
                    <span className="text">Search</span>
                </a>
                {searchOpen && (
                    <div className="dropdown">
                        <input type="text" placeholder="Search..." className="search-box" />
                        <ul className="search-list">
                            <li>Result 1</li>
                            <li>Result 2</li>
                            <li>Result 3</li>
                        </ul>
                    </div>
                )}
                <a href="#">
                    <FaDirections className="icon" />
                    <span className="text">Directions</span>
                </a>
                <a href="#">
                    <FaBook className="icon" />
                    <span className="text">Guide</span>
                </a>
            </div>
            <div className="map-container">
                {/* Map rendering logic here */}
                
            </div>
        </div>
    );
};

export default Map;
