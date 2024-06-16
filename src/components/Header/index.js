import { Component } from 'react';

import './index.css';

class Header extends Component {
  toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
  };

  render() {
    return (
      <header className="header">
        <h1>Weather App</h1>
        <button onClick={this.toggleTheme}>Toggle Dark Mode</button>
      </header>
    );
  }
}

export default Header;
