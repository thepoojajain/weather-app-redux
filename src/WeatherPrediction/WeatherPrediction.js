import React from 'react';
import './WeatherPrediction.css';
import WeatherPredictionCard from '../WeatherPredictionCard/WeatherPredictionCard';

export default function WeatherPrediction({ weatherData }) {
  return (
    <div className="WeatherPrediction">
      <h2 className="WeatherPredictionHeader">Weather Prediction</h2>
      <WeatherPredictionCard dailyWeatherData={weatherData.daily[0]} />
      <WeatherPredictionCard dailyWeatherData={weatherData.daily[1]} />
      <WeatherPredictionCard dailyWeatherData={weatherData.daily[2]} />
      <WeatherPredictionCard dailyWeatherData={weatherData.daily[3]} />
      <WeatherPredictionCard dailyWeatherData={weatherData.daily[4]} />
      <WeatherPredictionCard dailyWeatherData={weatherData.daily[5]} />
      <WeatherPredictionCard dailyWeatherData={weatherData.daily[6]} />
    </div>
  );
}
