import { Component } from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  state = {
    weatherData: "",
  };

  handleSearch = async (location) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7d52e72d2be1bf110166ad19a8abc138&units=metric`);
      if (!response.ok) {
        alert('Location not found');
      } else {
        const data = await response.json();
        this.setState({ weatherData: data });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  render() {
    const {weatherData} = this.state
    return (
      <div className="App">
        <Header />
        <SearchBar onSearch={this.handleSearch} />
        <WeatherInfo data={weatherData} />
        <Footer />
      </div>
    );
  }
}

export default App;
