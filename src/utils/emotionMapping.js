export const emotionToGenre = {
  happy: ['pop', 'dance', 'funk', 'disco'],
  sad: ['blues', 'indie', 'alternative', 'acoustic'],
  angry: ['rock', 'metal', 'punk', 'hardcore'],
  surprised: ['electronic', 'experimental', 'ambient'],
  fearful: ['dark ambient', 'horror soundtrack', 'industrial'],
  disgusted: ['grunge', 'alternative rock'],
  neutral: ['chill', 'lo-fi', 'jazz', 'classical']
};

export const getDominantEmotion = (expressions) => {
  if (!expressions) return 'neutral';
  
  const emotions = Object.keys(expressions);
  let maxEmotion = 'neutral';
  let maxValue = 0;
  
  emotions.forEach(emotion => {
    if (expressions[emotion] > maxValue) {
      maxValue = expressions[emotion];
      maxEmotion = emotion;
    }
  });
  
  return maxValue > 0.3 ? maxEmotion : 'neutral';
};
