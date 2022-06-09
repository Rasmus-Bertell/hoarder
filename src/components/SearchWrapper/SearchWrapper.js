import React from "react";

import styles from './SearchWrapper.module.css';

import FloatingResults from "../FloatingResults/FloatingResults";
import ResponsiveSearch from "../ResponsiveSearch/ResponsiveSearch";

export default class SearchWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.handleResults = this.handleResults.bind(this);
    this.viewAction    = this.viewAction.bind(this);
    this.valueCallback = this.valueCallback.bind(this);

    this.state = {
      search: "",
      results: [],
    };
  }

  handleResults(response) {
    if (response == null || response.Response === "False") {
      this.setState({results: []});
    } else {
      this.setState({results: response.Search});
    }
  }

  valueCallback(value) {
    this.setState({search: value});
  }

  viewAction() {
    this.setState({results: [], search: ""});
  }

  render() {
    return (
      <div className={styles.searchWrapper}>
        <ResponsiveSearch search={this.state.search} searchStringCallback={this.valueCallback} callback={this.handleResults} />
        <div className={styles.floatWrapper}>
          <FloatingResults
            results={this.state.results}
            onView={this.viewAction}
          />
        </div>
      </div>
    )
  }
}