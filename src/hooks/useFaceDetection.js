import { useState, useEffect, useRef } from 'react';
import { loadFaceApiModels, detectFaceExpressions } from '../utils/faceApiSetup';
import { getDominantEmotion } from '../utils/emotionMapping';

export const useFaceDetection = () => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState('neutral');
  const [expressions, setExpressions] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const initializeFaceApi = async () => {
      const loaded = await loadFaceApiModels();
      setIsModelLoaded(loaded);
    };
    
    initializeFaceApi();
  }, []);

  const startDetection = async () => {
    if (!isModelLoaded) return;
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsDetecting(true);
        
        intervalRef.current = setInterval(async () => {
          if (videoRef.current) {
            const detections = await detectFaceExpressions(videoRef.current);
            
            if (detections.length > 0) {
              const expressions = detections[0].expressions;
              const emotion = getDominantEmotion(expressions);
              
              setExpressions(expressions);
              setCurrentEmotion(emotion);
            }
          }
        }, 1000); // Detect every second
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopDetection = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
    
    setIsDetecting(false);
  };

  return {
    videoRef,
    isModelLoaded,
    currentEmotion,
    expressions,
    isDetecting,
    startDetection,
    stopDetection
  };
};
