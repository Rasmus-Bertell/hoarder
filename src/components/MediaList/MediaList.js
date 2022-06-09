import styles from './MediaList.module.css';

import Cover from "../Cover/Cover";
import { Link } from 'react-router-dom';

function MediaList(props) {
  return (
    <div className={styles.list}>
      {props.movies.map(({imdbID, Title, Poster}) => (
        <span key={imdbID} className={styles.item}>
          <Cover className="medium" image={Poster} title={Title} />
          <Link className={styles.title} to={`/info/${imdbID}`}>{Title}</Link>
          <span className={styles.remove} onClick={() => props.onRemove(imdbID)}>X</span>
        </span>
      ))}
    </div>
  )
}

export default MediaList;