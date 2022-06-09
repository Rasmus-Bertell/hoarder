import Cover from "../Cover/Cover"

import styles from "./Poster.module.css";

const Poster = (props) => {
  return (
    <span className={styles.wrapper}>
      <Cover className="large" image={props.image} title={props.title}/>
      <span className={styles.add} onClick={() => props.onAdd(props.id)}>+</span>
    </span>
  )
}

export default Poster;