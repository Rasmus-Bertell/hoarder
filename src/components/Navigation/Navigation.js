import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <Link className={styles.link} to="/">Home</Link>
    </>
  )
}

export default Navigation;