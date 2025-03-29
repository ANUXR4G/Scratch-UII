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

const sayForDuration = (setMsg, message, duration = 2) => {
  enqueueAnimation((done) => {
    setMsg((prev) => {
      const sprite = document.getElementById("sprite1");
      if (sprite) {
        const msg = sprite.querySelector(".msg");
        if (msg) {
          msg.textContent = message;
          msg.style.display = "block";
          setTimeout(() => {
            msg.style.display = "none";
            done();
          }, duration * 1000);
        }
      }
      return message;
    });
  });
};

const say = (setMsg, message) => {
  enqueueAnimation((done) => {
    setMsg((prev) => {
      const sprite = document.getElementById("sprite1");
      if (sprite) {
        const msg = sprite.querySelector(".msg");
        if (msg) {
          msg.textContent = message;
          msg.style.display = "block";
        }
        done();
      }
      return message;
    });
  });
};

const think = (setMsg, message) => {
  enqueueAnimation((done) => {
    setMsg((prev) => {
      const sprite = document.getElementById("sprite1");
      if (sprite) {
        const msg = sprite.querySelector(".msg");
        const think = sprite.querySelector(".think");
        if (think) {
          msg.textContent = message;
          msg.style.display = "block";
          think.style.display = "block";
        }
        done();
      }
      return message;
    });
  });
};

const thinkForDuration = (setMsg, message, duration) => {
  enqueueAnimation((done) => {
    setMsg((prev) => {
      const sprite = document.getElementById("sprite1");
      if (sprite) {
        const msg = sprite.querySelector(".msg");
        const think = sprite.querySelector(".think");
        if (think) {
          think.style.display = "block";
          msg.textContent = message;
          msg.style.display = "block";
          setTimeout(() => {
            msg.style.display = "none";
            think.style.display = "none";
            done();
          }, duration * 1000);
        }
      }
      return message;
    });
  });
};

const size = (setSizeSprite, value) => {
  enqueueAnimation((done) => {
    setSizeSprite((prev) => {
      const sprite = document.getElementById("sprite1");
      if (sprite) {
        sprite.style.transform += ` scale(${value})`;
        done();
      }
      return value;
    });
  });
};

const show = (setDisplay) => {
  enqueueAnimation((done) => {
    setDisplay((prev) => {
      const sprite = document.getElementById("sprite1");
      if (sprite) {
        sprite.style.display = "block";
        done();
      }
      return true;
    });
  });
};

const hide = (setDisplay) => {
  enqueueAnimation((done) => {
    setDisplay((prev) => {
      const sprite = document.getElementById("sprite1");
      if (sprite) {
        sprite.style.display = "none";
        done();
      }
      return false;
    });
  });
};

export { say, sayForDuration, thinkForDuration, think, size, show, hide };
