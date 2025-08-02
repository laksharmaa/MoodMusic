import React, { useState } from 'react';
import FaceDetection from './components/FaceDetection';
import PlaylistSuggestions from './components/PlaylistSuggestions';
import './styles/components.css';

function App() {
  const [currentEmotion, setCurrentEmotion] = useState('neutral');
  const [expressions, setExpressions] = useState(null);

  const handleEmotionChange = (emotion, expressionData) => {
    setCurrentEmotion(emotion);
    setExpressions(expressionData);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🎵 Mood Music Recommender</h1>
        <p>Let your emotions guide your music!</p>
      </header>
      
      <main className="app-main">
        <div className="detection-section">
          <FaceDetection onEmotionChange={handleEmotionChange} />
        </div>
        
        <div className="playlist-section">
          <PlaylistSuggestions emotion={currentEmotion} />
        </div>
      </main>
    </div>
  );
}

export default App;
