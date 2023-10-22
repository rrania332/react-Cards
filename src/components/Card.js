import "../components/Cards.css";
import { data as testData } from "../test";
import { useState } from "react";

export default function Card(props) {
  return (
    <div className="cards">
      <img
        className="img"
        src={props.image}
        loading="lazy"
        width="300px"
        height="200px"
      />
      <div className="card-body">
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
        <button className="bt" onClick={props.deleteCard}>
          Delete
        </button>
      </div>
    </div>
  );
}
