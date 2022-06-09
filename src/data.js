let movies = ["tt0365748", "tt0425112", "tt1213663"];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(movie => movie === id);
}

export function deleteMovie(id) {
  movies = movies.filter(movie => movie !== id);
}

export function addMovie(id) {
  if (getMovie(id) != null) {
    return;
  }

  movies.push(id);
}