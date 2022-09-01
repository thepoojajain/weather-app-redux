import React from 'react';
import './Air.css';
import '../../styles.css';

export default function Air({ currentWeatherData }) {
  return (
    <div class="air-quality box-4">
      {currentWeatherData ? (
        <div className="weather--content">
          <div className="box-header">
            <div class="white-circle">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1247/1247109.png"
                alt="weather Icon"
                class="weather--Icon"
              />
            </div>
            <div>
              <h2 class="header-element">Air Quality</h2>
              <p class="header-element">Main pollution : </p>
            </div>
          </div>
          <div class="box-body">
            <div class="temp">
              <h1>
                {currentWeatherData.temp.toFixed()}
                <span>&#8451;</span>
              </h1>
              <div class="rectangle rectangle-size rectangle-color">
                <h6>
                  {currentWeatherData.feels_like.toFixed()}
                  <span>&#8451;</span>
                </h6>
              </div>
            </div>
            <p>{currentWeatherData.weather[0].description}</p>
          </div>
          <div class="grid-1x3">
            <div class="block rectangle rectangle-color-1">
              <p>Pressure</p>
              <p>{currentWeatherData.pressure}mb</p>
            </div>
            <div class="block rectangle rectangle-color-2">
              <p>Visibility</p>
              <p>{currentWeatherData.visibility / 1000}km</p>
            </div>
            <div class="block rectangle rectangle-color-3">
              <p>Humidity</p>
              <p>
                {currentWeatherData.humidity}
                <span>&#8453;</span>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
