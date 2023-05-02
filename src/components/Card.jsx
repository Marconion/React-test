import React from "react";
import styles from "./main.css";

function Card() {
  return (
    <div className="main">
      <div className="card">
        <div className="card-header">
          <h1>Ime</h1>
          <img className="profile-image" src="https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg" />
        </div>
        <div className="card-body">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="card-footer">
          <p>Copyright</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
