export function fetchMovie(id, fullPlot) {
  let url = `https://www.omdbapi.com/?apikey=ef86bae8&type=movie&i=${id}`;

  if (fullPlot === true) {
    url = `${url}&plot=full`;
  }

  const request = new XMLHttpRequest();

  request.open("GET", url, false);
  request.send(null);

  return JSON.parse(request.responseText);
}

export async function fetchMovies(movies, callback) {
  movies = await Promise.all(movies.map(async id => {
    return fetchMovie(id);
  }));

  callback(movies);
}

export async function searchMovies(search, callback) {
  fetch(
    `https://www.omdbapi.com/?apikey=ef86bae8&type=movie&s=${search}`
  ).then((response) => response.json())
  .then(response => callback(response))
  .catch(error => console.debug(error));
}