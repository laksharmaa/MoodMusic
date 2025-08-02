import React, { useState, useEffect } from 'react';
import { getPlaylistByEmotion } from '../utils/musicData';

const PlaylistSuggestions = ({ emotion }) => {
  const [playlist, setPlaylist] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    if (emotion) {
      const newPlaylist = getPlaylistByEmotion(emotion);
      setPlaylist(newPlaylist);
    }
  }, [emotion]);

  const playSong = (song) => {
    setCurrentSong(song);
    // Here you would integrate with actual music streaming API
    console.log('Playing:', song);
  };

  return (
    <div className="playlist-container">
      <h2>Recommended for your mood: <span className="mood">{emotion}</span></h2>
      
      {currentSong && (
        <div className="now-playing">
          <h3>Now Playing:</h3>
          <div className="current-song">
            <strong>{currentSong.title}</strong> by {currentSong.artist}
          </div>
        </div>
      )}
      
      <div className="playlist">
        {playlist.map((song) => (
          <div key={song.id} className="song-item">
            <div className="song-info">
              <div className="song-title">{song.title}</div>
              <div className="song-artist">{song.artist}</div>
              <div className="song-genre">{song.genre}</div>
            </div>
            <button 
              onClick={() => playSong(song)}
              className="play-btn"
            >
              ▶️ Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistSuggestions;
