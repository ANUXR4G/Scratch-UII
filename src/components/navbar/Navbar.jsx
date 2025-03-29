import "./navbar.css";
import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="left">
        <div className="logo">
          <img src="/images/vsay-logo.webp" alt="VSAY LOGO" />
          <h3>VSAY</h3>
        </div>
        <div className="options">
          <div className="setting">Setting</div>
          <div className="file">File</div>
          <div className="edit">Edit</div>
        </div>
      </div>
      <div className="right">
        <div className="join">Join Scratch</div>
        <div className="sign">Sign in</div>
      </div>
    </nav>
  );
}

export default Navbar;
