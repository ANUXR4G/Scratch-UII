// Helper function to extract current translate and rotate values
const extractTransformValues = (transform) => {
  const match = transform.match(
    /translate\(([-\d.]+)px,\s*([-\d.]+)px\)\s*rotate\(([-\d.]+)deg\)/
  );
  if (match) {
    return {
      x: parseFloat(match[1]) || 0,
      y: parseFloat(match[2]) || 0,
      angle: parseFloat(match[3]) || 0,
    };
  }
  return { x: 0, y: 0, angle: 0 };
};

// Update sprite with combined transform
const updateTransform = (sprite, x, y, angle) => {
  sprite.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
};

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

// Move forward by X pixels
const moveForward = (setPosition, value) => {
  enqueueAnimation((done) => {
    setPosition((prev) => {
      const sprite = document.getElementById("sprite1");
      if (sprite) {
        const { x, y, angle } = extractTransformValues(sprite.style.transform);
        const newX = x + value;

        updateTransform(sprite, newX, y, angle);
        sprite.style.transition = "transform 0.5s ease";

        sprite.addEventListener(
          "transitionend",
          () => {
            sprite.style.transition = "none";
            done();
          },
          { once: true }
        );
        return newX;
      }
      return prev;
    });
  });
};

// Rotate sprite to the right
const turnRight = (setRight, value) => {
  enqueueAnimation((done) => {
    setRight((prev) => {
      const sprite = document.getElementById("sprite1");
      if (sprite) {
        const { x, y, angle } = extractTransformValues(sprite.style.transform);
        const newAngle = angle + value;

        updateTransform(sprite, x, y, newAngle);
        sprite.style.transition = "transform 0.5s ease";

        sprite.addEventListener(
          "transitionend",
          () => {
            sprite.style.transition = "none";
            done();
          },
          { once: true }
        );
        return newAngle;
      }
      return prev;
    });
  });
};

// Rotate sprite to the left
const turnLeft = (setLeft, value) => {
  enqueueAnimation((done) => {
    setLeft((prev) => {
      const sprite = document.getElementById("sprite1");
      if (sprite) {
        const { x, y, angle } = extractTransformValues(sprite.style.transform);
        const newAngle = angle - value;

        updateTransform(sprite, x, y, newAngle);
        sprite.style.transition = "transform 0.5s ease";

        sprite.addEventListener(
          "transitionend",
          () => {
            sprite.style.transition = "none";
            done();
          },
          { once: true }
        );
        return newAngle;
      }
      return prev;
    });
  });
};

// Move sprite to a random position
const randomPosition = (setRandom) => {
  enqueueAnimation((done) => {
    setRandom((prev) => {
      const sprite = document.getElementById("sprite1");
      const randomX = Math.floor(Math.random() * 401) - 200;
      const randomY = Math.floor(Math.random() * 401) - 200;
      if (sprite) {
        const { angle } = extractTransformValues(sprite.style.transform);

        updateTransform(sprite, randomX, randomY, angle);
        done();
      }
      return { ...prev, x: randomX, y: randomY };
    });
  });
};

// Move sprite to a specific position
const moveTo = (setMove, x, y) => {
  enqueueAnimation((done) => {
    setMove(() => {
      const sprite = document.getElementById("sprite1");
      if (sprite) {
        const { angle } = extractTransformValues(sprite.style.transform);
        updateTransform(sprite, x, y, angle);
        done();
      }
      return { x, y };
    });
  });
};

// Move sprite by X axis only
const gotoX = (setMoveX, x) => {
  enqueueAnimation((done) => {
    setMoveX((prev) => {
      const sprite = document.getElementById("sprite1");
      const newX = prev + x;
      if (sprite) {
        const { y, angle } = extractTransformValues(sprite.style.transform);

        updateTransform(sprite, newX, y, angle);
        done();
      }
      return newX;
    });
  });
};

// Move sprite by Y axis only
const gotoY = (setMoveY, y) => {
  enqueueAnimation((done) => {
    setMoveY((prev) => {
      const sprite = document.getElementById("sprite1");
      const newY = prev + y;
      if (sprite) {
        const { x, angle } = extractTransformValues(sprite.style.transform);

        updateTransform(sprite, x, newY, angle);
        done();
      }
      return newY;
    });
  });
};

// Glide to a random position over a given time
const glideRandom = (setRandom, t) => {
  enqueueAnimation((done) => {
    setRandom((prev) => {
      const sprite = document.getElementById("sprite1");
      const randomX = Math.floor(Math.random() * 401) - 200;
      const randomY = Math.floor(Math.random() * 401) - 200;
      if (sprite) {
        const { angle } = extractTransformValues(sprite.style.transform);

        updateTransform(sprite, randomX, randomY, angle);
        sprite.style.transition = `transform ${t}s ease`;

        sprite.addEventListener(
          "transitionend",
          () => {
            sprite.style.transition = "none";
            done();
          },
          { once: true }
        );
      }
      return { x: randomX, y: randomY };
    });
  });
};

const glidePosition = (setMove, t, x, y) => {
  enqueueAnimation((done) => {
    setMove((prev) => {
      const sprite = document.getElementById("sprite1");
      if (sprite) {
        const { angle } = extractTransformValues(sprite.style.transform);

        updateTransform(sprite, x, y, angle);
        sprite.style.transition = `transform ${t}s ease`;

        sprite.addEventListener(
          "transitionend",
          () => {
            sprite.style.transition = "none";
            done();
          },
          { once: true }
        );
      }
      return { x: x, y: y };
    });
  });
};

export {
  moveForward,
  turnRight,
  turnLeft,
  randomPosition,
  moveTo,
  gotoX,
  gotoY,
  glideRandom,
  glidePosition,
};
