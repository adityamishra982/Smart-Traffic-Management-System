import React, { useRef, useState } from "react";
import { FaTimes } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import "./camera.css";

const CameraUpload = ({ onClose }) => {
  const fileInputRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedVideoUrl(url);
      setLoading(true);
      console.log("Selected file:", file.name);

      // Create FormData to send the file to the backend
      const formData = new FormData();
      formData.append('video', file);

      try {
        const response = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: formData,
        });
        
        const data = await response.json();
        setResult(data);
        setLoading(false);
      } catch (error) {
        console.error("Error uploading video:", error);
        setLoading(false);
      }
    }
  };

  const handleUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleUrlSubmit = async () => {
    setUploadedVideoUrl(videoUrl);
    setLoading(true);
    
    // Send the video URL to the backend for processing
    try {
      const response = await fetch('http://localhost:5000/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ video_url: videoUrl }),
      });
      
      const data = await response.json();
      setResult(data);
      setLoading(false);
    } catch (error) {
      console.error("Error processing video:", error);
      setLoading(false);
    }
  };

  const handleReady = () => {
    setLoading(false);
  };

  return (
    <div className="camera-upload">
      <button className="close-btn" onClick={onClose}><FaTimes /></button>
      <h1>Video Player and Text Area</h1>
      <div className="container">
        <div className="video-player-container">
          <p>Click below to upload your video, photo, or presentation</p>
          <button className="upload-btn" onClick={handleUploadClick}>Upload</button>
          <input ref={fileInputRef} type="file" accept="video/*" style={{ display: "none" }} onChange={handleFileChange} />
          
          <p>or enter a video URL</p>
          <input type="text" value={videoUrl} onChange={handleUrlChange} placeholder="Enter video URL" />
          <button onClick={handleUrlSubmit}>Submit</button>
        </div>
        {loading && <div className="loader">Loading...</div>}
        {uploadedVideoUrl && <ReactPlayer url={uploadedVideoUrl} controls onReady={handleReady} />}
        <textarea className="textarea" placeholder="Type your notes here..."></textarea>
        {result && <div className="result">{JSON.stringify(result)}</div>}
      </div>
    </div>
  );
};

export default CameraUpload;
