import { Component } from 'react';

import './index.css';

class WeatherInfo extends Component {
  render() {
    const { data } = this.props;

    if (!data) return <p className="no-data">No data available. Please search for a location.</p>;

    const { name, main, weather } = data;
    const date = new Date().toLocaleString();

    return (
      <div className="weather-info">
        <h2 className='location-name'>{name}</h2>
        <p className='date-time'>{date}</p>
        <p className='weather-temp'>Temperature: <span className='temp'>{main.temp}°C</span></p>
        <p className='weather-temp'>Weather: <span className='weather-description'>{weather[0].description}</span></p>
      </div>
    );
  }
}

export default WeatherInfo;
