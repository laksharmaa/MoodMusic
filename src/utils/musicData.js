import { emotionToGenre } from './emotionMapping.js';

export const musicDatabase = {
  pop: [
    { id: 1, title: "Happy", artist: "Pharrell Williams", genre: "pop" },
    { id: 2, title: "Can't Stop the Feeling", artist: "Justin Timberlake", genre: "pop" },
    { id: 3, title: "Uptown Funk", artist: "Bruno Mars", genre: "pop" }
  ],
  blues: [
    { id: 4, title: "The Thrill Is Gone", artist: "B.B. King", genre: "blues" },
    { id: 5, title: "Stormy Monday", artist: "T-Bone Walker", genre: "blues" }
  ],
  rock: [
    { id: 6, title: "Thunderstruck", artist: "AC/DC", genre: "rock" },
    { id: 7, title: "Enter Sandman", artist: "Metallica", genre: "rock" }
  ],
  electronic: [
    { id: 8, title: "Strobe", artist: "Deadmau5", genre: "electronic" },
    { id: 9, title: "Clarity", artist: "Zedd", genre: "electronic" }
  ],
  chill: [
    { id: 10, title: "Weightless", artist: "Marconi Union", genre: "chill" },
    { id: 11, title: "River", artist: "Eminem ft. Ed Sheeran", genre: "chill" }
  ],
  // Add missing genres from emotionMapping
  dance: [
    { id: 12, title: "One More Time", artist: "Daft Punk", genre: "dance" },
    { id: 13, title: "Levels", artist: "Avicii", genre: "dance" }
  ],
  funk: [
    { id: 14, title: "Get Up (I Feel Like Being a) Sex Machine", artist: "James Brown", genre: "funk" },
    { id: 15, title: "Le Freak", artist: "Chic", genre: "funk" }
  ],
  disco: [
    { id: 16, title: "Stayin' Alive", artist: "Bee Gees", genre: "disco" },
    { id: 17, title: "I Will Survive", artist: "Gloria Gaynor", genre: "disco" }
  ],
  indie: [
    { id: 18, title: "Mr. Brightside", artist: "The Killers", genre: "indie" },
    { id: 19, title: "Somebody That I Used to Know", artist: "Gotye", genre: "indie" }
  ],
  alternative: [
    { id: 20, title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "alternative" },
    { id: 21, title: "Creep", artist: "Radiohead", genre: "alternative" }
  ],
  acoustic: [
    { id: 22, title: "Tears in Heaven", artist: "Eric Clapton", genre: "acoustic" },
    { id: 23, title: "Black", artist: "Pearl Jam", genre: "acoustic" }
  ],
  metal: [
    { id: 24, title: "Master of Puppets", artist: "Metallica", genre: "metal" },
    { id: 25, title: "Paranoid", artist: "Black Sabbath", genre: "metal" }
  ],
  punk: [
    { id: 26, title: "Anarchy in the U.K.", artist: "Sex Pistols", genre: "punk" },
    { id: 27, title: "Blitzkrieg Bop", artist: "Ramones", genre: "punk" }
  ],
  hardcore: [
    { id: 28, title: "Straight Edge", artist: "Minor Threat", genre: "hardcore" },
    { id: 29, title: "Rise Above", artist: "Black Flag", genre: "hardcore" }
  ],
  experimental: [
    { id: 30, title: "Windowlicker", artist: "Aphex Twin", genre: "experimental" },
    { id: 31, title: "Come to Daddy", artist: "Aphex Twin", genre: "experimental" }
  ],
  ambient: [
    { id: 32, title: "An Ending (Ascent)", artist: "Brian Eno", genre: "ambient" },
    { id: 33, title: "Music for Airports", artist: "Brian Eno", genre: "ambient" }
  ],
  grunge: [
    { id: 34, title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "grunge" },
    { id: 35, title: "Alive", artist: "Pearl Jam", genre: "grunge" }
  ],
  jazz: [
    { id: 36, title: "Take Five", artist: "Dave Brubeck", genre: "jazz" },
    { id: 37, title: "So What", artist: "Miles Davis", genre: "jazz" }
  ],
  classical: [
    { id: 38, title: "Für Elise", artist: "Ludwig van Beethoven", genre: "classical" },
    { id: 39, title: "Canon in D", artist: "Johann Pachelbel", genre: "classical" }
  ]
};

export const getPlaylistByEmotion = (emotion) => {
  const genres = emotionToGenre[emotion] || ['chill'];
  const playlist = [];
  
  genres.forEach(genre => {
    if (musicDatabase[genre]) {
      playlist.push(...musicDatabase[genre]);
    }
  });
  
  return playlist.slice(0, 10); // Return top 10 songs
};
