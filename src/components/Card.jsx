import React from "react";
import styles from "./main.css";
import clanovi from "../clanovi";

function Card(props) {
  return (
    <div className="main">
      <div className="card">
        <div className="card-header">
          <h1>{props.name}</h1>
          <img className="profile-image" src={props.img} />
        </div>
        <div className="card-body">
          <p>{props.opis}</p>
        </div>
        <div className="card-footer">
          <p>Copyright</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
