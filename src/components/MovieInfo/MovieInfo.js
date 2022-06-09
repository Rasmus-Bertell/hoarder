import { useParams } from "react-router-dom";

import styles from "./MovieInfo.module.css";

import { fetchMovie } from "../../omdb";
import Poster from "../Poster/Poster"

const MovieInfo = (props) => {
  let params = useParams();
  let movie  = fetchMovie(params.imdbID, true);

  if (movie == null) {
    return (<></>);
  }

  return (
    <span className={styles.wrapper}>
      <Poster image={movie.Poster} title={movie.Title} onAdd={props.onAdd} id={params.imdbID} />
      <span>
        <h1>{movie.Title} ({movie.Year})</h1>
        <div>{movie.Genre}</div>
        <div className={styles.plot}>{movie.Plot}</div>
      </span>
    </span>
  );
}

export default MovieInfo;