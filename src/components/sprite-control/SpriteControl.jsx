import "./spriteControl.css";

import React from "react";

function SpriteControl(props) {
  const { setImgPath, setBgPath } = props;

  const handleSpriteClick = (path) => {
    setImgPath(path);
  };

  const handleBgClick = (path) => {
    setBgPath(path);
  };

  return (
    <div className="sprite_control">
      <div className="sprite_selection">
        <h3>Choose an sprite</h3>
        <div className="sprite_selection_container">
          <div
            className="image_container"
            onClick={() => handleSpriteClick("sprite")}
          >
            <img src="/images/sprite.svg" alt="cat sprite" />
          </div>
          <div
            className="image_container"
            onClick={() => handleSpriteClick("girl")}
          >
            <img src="/images/girl.svg" alt="girl sprite" />
          </div>
          <div
            className="image_container"
            onClick={() => handleSpriteClick("penguin")}
          >
            <img src="/images/penguin.svg" alt="penguin sprite" />
          </div>
        </div>
      </div>
      <div className="background_selection">
        <h3>Choose an background</h3>
        <div className="background_selection_container">
          <div className="image_container" onClick={() => handleBgClick("bg1")}>
            <img src="/images/bg1.png" alt="bg1" />
          </div>
          <div className="image_container" onClick={() => handleBgClick("bg2")}>
            <img src="/images/bg2.png" alt="bg2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpriteControl;
