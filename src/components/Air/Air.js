import React from 'react';
import './Air.css';
import '../../styles.css';

export default function Air({ currentWeatherData }) {
  return (
    <div className="air-quality box-4">
      {currentWeatherData ? (
        <div className="weather--content">
          <div className="box-header">
            <div className="white-circle">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1247/1247109.png"
                alt="weather Icon"
                className="weather--Icon"
              />
            </div>
            <div>
              <h2 className="header-element">Air Quality</h2>
              <p className="header-element">Main pollution : </p>
            </div>
          </div>
          <div className="box-body">
            <div className="temp">
              <h1>
                {currentWeatherData.temp.toFixed()}
                <span>&#8451;</span>
              </h1>
              <div className="rectangle rectangle-size rectangle-color">
                <h6>
                  {currentWeatherData.feels_like.toFixed()}
                  <span>&#8451;</span>
                </h6>
              </div>
            </div>
            <p>{currentWeatherData.weather[0].description}</p>
          </div>
          <div className="grid-1x3">
            <div className="block rectangle rectangle-color-1">
              <p>Pressure</p>
              <p>{currentWeatherData.pressure}mb</p>
            </div>
            <div className="block rectangle rectangle-color-2">
              <p>Visibility</p>
              <p>{currentWeatherData.visibility / 1000}km</p>
            </div>
            <div className="block rectangle rectangle-color-3">
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
