import React from 'react';
import './WeatherPrediction.css';
import WeatherPredictionCard from '../WeatherPredictionCard/WeatherPredictionCard';

export default function WeatherPrediction({ weatherData }) {
  return (
    <div className="WeatherPrediction">
      <h2 className="WeatherPredictionHeader">Weather Prediction</h2>
      {weatherData.daily.map((item) => (
        <WeatherPredictionCard dailyWeatherData={item} />
      ))}
    </div>
  );
}
