import React from "react";

import styles from './ResponsiveSearch.module.css';

import { searchMovies } from "../../omdb";

class ResponsiveSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    if (event == null || event.target == null) {
      console.debug(event);
      return;
    }

    this.props.searchStringCallback(event.target.value);
    
    clearTimeout(event.target.dataset.timeout);
  
    event.target.dataset.timeout = setTimeout(
      (value) => searchMovies(value, this.props.callback),
      500,
      event.target.value
    );
  }

  render() {
    return (
      <input
        type="search"
        name="search"
        value={this.props.search}
        className={styles.search}
        placeholder="Search movies"
        aria-label="Search movies"
        onInput={this.handleInput}
      />
    );
  }
}

export default ResponsiveSearch;