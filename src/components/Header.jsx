import React from "react";
import styles from "./header.css";

function Header() {
  return (
    <header>
      <div>
        <h1>Marko Zujovic</h1>
      </div>
      <div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
      </div>
    </header>
  );
}

export default Header;
