import React from 'react';
import './WeatherPredictionCard.css';

export default function WeatherPredictionCard({ weatherData }) {
  return (
    <div>
      <div className="WeatherCard">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1247/1247109.png"
            alt="cloud-icon"
            className="cloud-icon"
          />
        </div>
        <div className="cardDate">
          <p>{weatherData.daily[0].dt}</p>
          <div className="cardTemp">
            <h3>{weatherData.daily[0].weather[0].description}</h3>
            <h3 className="minMaxTemp">
              {weatherData.daily[0].temp.max.toFixed()}
              <span>&deg;</span> / {weatherData.daily[0].temp.min.toFixed()}
              <span>&deg;</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
