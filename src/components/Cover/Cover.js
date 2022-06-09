import React from "react";

import styles from "./Cover.module.css";
import placeholder from '../../assets/placeholder.svg'

function Cover(props) {
  let image = props.image;
  let className = null

  if (image === "N/A") {
    image = null;
    className = "placeholder";
  }

  return (
    <picture>
      <source srcSet={image}></source>
      <img
        className={`${styles.cover} ${styles[props.className]} ${styles[className]}`}
        src={placeholder}
        alt={props.title}
      />
    </picture>
  );
}

export default Cover;
