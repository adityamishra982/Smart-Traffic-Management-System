import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/Components/Navbar.jsx';
import SignInForm from './assets/Components/sign in.jsx';
import Map from './assets/Components/Map.jsx';
import './App.css';
import Footer from './assets/Components/Footer.jsx';
import BackgroundVideo from './assets/Components/back.jsx';
import About from './assets/Components/about us.jsx'; 
import Camera from './assets/Components/camera.jsx'; // Import Camera component

const App = () => {
    const [showMap, setShowMap] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showBackground, setShowBackground] = useState(true);
    const [showCamera, setShowCamera] = useState(false); // New state for camera

    const handleOpenMap = () => {
        setShowMap(true);
    };

    const handleCloseMap = () => {
        setShowMap(false);
    };

    const handleOpenSignIn = () => {
        setShowSignIn(true);
        setShowBackground(false);
    };

    const handleCloseSignIn = () => {
        setShowSignIn(false);
        setShowBackground(true);
    };

    const handleOpenAbout = () => {
        setShowAbout(true);
        setShowBackground(false);
    };

    const handleCloseAbout = () => {
        setShowAbout(false);
        setShowBackground(true);
    };

    const handleOpenCamera = () => {
        setShowCamera(true);
        setShowBackground(false);
    };

    const handleCloseCamera = () => {
        setShowCamera(false);
        setShowBackground(true);
    };

    return (
        <div>
            {showBackground && <BackgroundVideo />}
            <Router>
                <Navbar onOpenMap={handleOpenMap} onOpenSignIn={handleOpenSignIn} onOpenAbout={handleOpenAbout} onOpenCamera={handleOpenCamera} />
                <div className="App">
                    {showMap && <Map onClose={handleCloseMap} />}
                    {showSignIn && <SignInForm onClose={handleCloseSignIn} />}
                    {showAbout && <About onClose={handleCloseAbout} />}
                    {showCamera && <Camera onClose={handleCloseCamera} />}

                    <Routes>
                        <Route path="/signin" element={<SignInForm onClose={handleCloseSignIn} />} />
                        <Route path="/map" element={<Map onClose={handleCloseMap} />} />
                        <Route path="/about-us" element={<About onClose={handleCloseAbout} />} />
                        <Route path="/camera" element={<Camera onClose={handleCloseCamera} />} />
                    </Routes>
                </div>
            </Router>
            <Footer />
        </div>
    );
};

export default App;
