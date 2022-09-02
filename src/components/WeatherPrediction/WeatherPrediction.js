import React from 'react';
import './WeatherPrediction.css';
import WeatherPredictionCard from '../WeatherPredictionCard/WeatherPredictionCard';

export default function WeatherPrediction({ dailyWeatherData }) {
  return (
    <div className="WeatherPrediction">
      <h2 className="WeatherPredictionHeader">Weather Prediction</h2>
      {dailyWeatherData.map((item) => (
        <WeatherPredictionCard key={item.dt} dailyWeatherData={item} />
      ))}
    </div>
  );
}
