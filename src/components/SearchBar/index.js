import React, { Component } from 'react';

import './index.css';

class SearchBar extends Component {
  state = {
    location: '',
  };

  handleInputChange = (event) => {
    this.setState({ location: event.target.value });
  };

  handleSearch = () => {
    const {location} = this.state;
    this.props.onSearch(location);
  };

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.location}
          onChange={this.handleInputChange}
          placeholder="Enter city name or zip code"
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
