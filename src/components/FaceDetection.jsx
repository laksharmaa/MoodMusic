import React from 'react';
import { useFaceDetection } from '../hooks/useFaceDetection';

const FaceDetection = ({ onEmotionChange }) => {
  const {
    videoRef,
    isModelLoaded,
    currentEmotion,
    expressions,
    isDetecting,
    startDetection,
    stopDetection
  } = useFaceDetection();

  React.useEffect(() => {
    if (onEmotionChange) {
      onEmotionChange(currentEmotion, expressions);
    }
  }, [currentEmotion, expressions, onEmotionChange]);

  return (
    <div className="face-detection-container">
      <div className="video-container">
        <video
          ref={videoRef}
          autoPlay
          muted
          width="640"
          height="480"
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>
      
      <div className="controls">
        {!isModelLoaded && <p>Loading face detection models...</p>}
        
        {isModelLoaded && !isDetecting && (
          <button onClick={startDetection} className="start-btn">
            Start Emotion Detection
          </button>
        )}
        
        {isDetecting && (
          <button onClick={stopDetection} className="stop-btn">
            Stop Detection
          </button>
        )}
      </div>
      
      {expressions && (
        <div className="emotion-display">
          <h3>Current Emotion: <span className="emotion">{currentEmotion}</span></h3>
          <div className="expression-bars">
            {Object.entries(expressions).map(([emotion, confidence]) => (
              <div key={emotion} className="expression-bar">
                <span>{emotion}:</span>
                <div className="bar">
                  <div 
                    className="fill" 
                    style={{ width: `${confidence * 100}%` }}
                  ></div>
                </div>
                <span>{(confidence * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FaceDetection;
