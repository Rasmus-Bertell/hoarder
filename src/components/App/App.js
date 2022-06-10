import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './App.module.css';

import { fetchMovies } from '../../omdb';
import { addMovie, deleteMovie, getMovies } from './../../data';

import Layout from '../Layout/Layout';
import MediaList from '../MediaList/MediaList';
import MovieInfo from '../MovieInfo/MovieInfo';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.addAction = this.addAction.bind(this);
    this.removeAction = this.removeAction.bind(this);
    this.updateMovieData = this.updateMovieData.bind(this);

    this.state = { movies: [] };
  }

  componentDidMount() {
    this.updateMovieData();
  }

  updateMovieData() {
    fetchMovies(getMovies(), (movies) => this.setState({movies: movies}));
  }

  addAction(id) {
    addMovie(id);

    this.updateMovieData();
  }

  removeAction(id) {
    deleteMovie(id);

    this.updateMovieData();
  }

  render() {
    return (
      <div className={styles.app}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MediaList movies={this.state.movies} onRemove={this.removeAction} />} />
              <Route path="info/:imdbID" element={<MovieInfo onAdd={this.addAction}/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}