import React from 'react';
import './Air.css';
import '../Common/Common.css';

export default function Air({ weatherData }) {
  return (
    <div class="air-quality box-4">
      {weatherData ? (
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
                {weatherData.current.temp.toFixed()}
                <span>&#8451;</span>
              </h1>
              <div class="rectangle rectangle-size rectangle-color">
                <h6>
                  {weatherData.current.feels_like.toFixed()}
                  <span>&#8451;</span>
                </h6>
              </div>
            </div>
            <p>{weatherData.current.weather[0].description}</p>
          </div>
          <div class="grid-1x3">
            <div class="block rectangle rectangle-color-1">
              <p>Pressure</p>
              <p>{weatherData.current.pressure}mb</p>
            </div>
            <div class="block rectangle rectangle-color-2">
              <p>Visibility</p>
              <p>{weatherData.current.visibility / 1000}km</p>
            </div>
            <div class="block rectangle rectangle-color-3">
              <p>Humidity</p>
              <p>
                {weatherData.current.humidity}
                <span>&#8453;</span>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
