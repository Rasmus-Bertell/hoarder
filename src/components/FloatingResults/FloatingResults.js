import styles from './FloatingResults.module.css';

import Cover from '../Cover/Cover'
import { Link } from 'react-router-dom';

function FloatingResults(props) {
  let results = props.results;
  results = results.slice(0, 4);

  return (
    <div className={styles.result}>
      {results.map(({Title, Year, imdbID, Poster}) => (
        <Link key={imdbID} className={styles.item} to={`info/${imdbID}`} onClick={() => {props.onView()}}>
          <Cover className="small" image={Poster} title={Title} />
          <span>{Title}, {Year}</span>
        </Link>
      ))}
    </div>
  );
}

export default FloatingResults;