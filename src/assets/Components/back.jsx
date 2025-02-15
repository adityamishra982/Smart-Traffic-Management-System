import React from 'react';
import './BackgroundVideo.css';
import video from './a.mp4';

const BackgroundVideo = () => {
    return (
        <div className="main">
            <video src={video}autoPlay loop muted/>
            
        </div>
    );
};

export default BackgroundVideo;
