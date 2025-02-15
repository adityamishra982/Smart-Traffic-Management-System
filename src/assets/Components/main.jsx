import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SignInForm from './assets/Components/sign in.jsx';
import Map from './assets/Components/Map.jsx';
import About from './assets/Components/about us.jsx';
import BackgroundVideo from './assets/Components/back.jsx';

const MainContent = ({ handleCloseMap, handleCloseSignIn, showMap, showSignIn }) => {
    const location = useLocation();

    return (
        <div>
            {location.pathname !== '/about' && !showMap && !showSignIn && <BackgroundVideo />}

            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/signin" element={<SignInForm onClose={handleCloseSignIn} />} />
                <Route path="/map" element={<Map onClose={handleCloseMap} />} />
            </Routes>
        </div>
    );
};

export default MainContent;
