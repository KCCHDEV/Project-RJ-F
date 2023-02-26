import React, { useState, useEffect } from 'react';
import './LoadingBar.css'; // Import the CSS file for styling

function LoadingBar() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API request delay of 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="loading-container">
      {isLoading ? (
        <div className="loading-bar">
          <div className="bar"></div>
        </div>
      ) : (
        <div className="content">
          <h2>Content Loaded!</h2>
          {/* Add any content that you want to display after the loading screen */}
          <h1> HELLO WORLD </h1>
        </div>
      )}
    </div>
  );
}

export default LoadingBar;