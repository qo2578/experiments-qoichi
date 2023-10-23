import React, { useState, useEffect } from 'react';
import "../../index.css";

const SplashScreen = () => {
    const [textVisible, setTextVisible] = useState(true);
    const [splashVisible, setSplashVisible] = useState(true);
  
    useEffect(() => {
      setTimeout(() => setTextVisible(false), 700);
      setTimeout(() => setSplashVisible(false), 760);
    }, []);
  
    return (
      <div className={`splashScreen-container ${!splashVisible ? 'splashScreen-hidden' : ''}`}>
        {textVisible && <p style={{color: 'black', fontSize: '2em'}}>Iskenderova Aiperi / Portfolio</p>}
      </div>
    );
  }
  
  export default SplashScreen;
