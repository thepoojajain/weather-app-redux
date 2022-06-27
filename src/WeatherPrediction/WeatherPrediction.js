import React from 'react';
import './WeatherPrediction.css';
import '../WeatherPredictionCard/WeatherPredictionCard';

export default function WeatherPrediction({ weatherData }) {
  return (
    <div>
      <h2>Weather Prediction</h2>
      <WeatherPredictionCard weatherData={weatherData} />
    </div>
  );
}
