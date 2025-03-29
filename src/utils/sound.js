// Animation Queue to process motions sequentially
const animationQueue = [];
let isAnimating = false;

const enqueueAnimation = (animationFn) => {
  animationQueue.push(animationFn);
  if (!isAnimating) processQueue();
};

const processQueue = () => {
  if (animationQueue.length === 0) {
    isAnimating = false;
    return;
  }

  isAnimating = true;
  const nextAnimation = animationQueue.shift();
  nextAnimation(() => processQueue());
};

const playSound = (setTrack, sound) => {
  enqueueAnimation((done) => {
    setTrack(() => {
      console.log(sound);

      const audio = new Audio(`/sounds/${sound}.wav`);
      audio.volume = currentVolume / 100;
      audio.play();
      audio.onended = done;

      return sound;
    });
  });
};

let currentVolume = 100; // Default volume to 100%

// Set sound volume
const setVolume = (setTrackVolume, value) => {
  enqueueAnimation((done) => {
    setTrackVolume(() => {
      currentVolume = Math.max(0, Math.min(100, value));
      done();

      return value;
    });
  });
};

export { playSound, setVolume };
