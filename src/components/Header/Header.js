import styles from "./Header.module.css";

import Navigation from "../Navigation/Navigation";
import SearchWrapper from "../SearchWrapper/SearchWrapper"

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Navigation />
      <span className={styles.searchWrapper}>
        <SearchWrapper />
      </span>
    </header>
  )
}

export default Header;