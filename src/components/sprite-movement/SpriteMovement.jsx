import "./spriteMovement.css";

import React from "react";

function SpriteMovement(props) {
  const { onRunClicked, msg, reset, bgPath, imgPath } = props;

  const styles = {
    backgroundImage: `url(/images/${bgPath}.png)`,
  };

  return (
    <div className="sprite_movement" style={styles}>
      <div className="buttons">
        <button className="run" onClick={onRunClicked}>
          Run
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="sprite_container" id="sprite1">
        <div className="msg">{msg}</div>
        <div className="think"></div>
        <img src={`/images/${imgPath}.svg`} alt="sprite" />
      </div>
    </div>
  );
}

export default SpriteMovement;
