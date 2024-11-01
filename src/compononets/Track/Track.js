import React from "react";
import styles from "./Track.module.css";

function Track(props) {
  return (
    <div id={props.id}>
      <p>{props.key}</p>
      <p>{props.artist}</p>
      <p>{props.song}</p>
      <p>{props.album}</p>
      <br></br>
    </div>
  );
}

export default Track;
