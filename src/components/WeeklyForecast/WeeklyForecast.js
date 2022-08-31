import React, { useState } from 'react';
import './WeeklyForecast.css';
import '../Common/Common.css';

export default function WeeklyForecast({ dailyWeatherData }) {
  const [currentTab, setCurrentTab] = useState('temperature');

  return (
    <div className="daily-forecast">
      <div className="daily-forecast-header">
        <div>
          <h1>How's the</h1>
          <h1>temperature today?</h1>
        </div>
        <div className="daily-forecast-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1113/1113853.png"
            alt="umbrella icon"
            className="forecast--icon"
            style={{
              'background-color': currentTab === 'temperature' ? 'orange' : '',
            }}
            onClick={() => setCurrentTab('temperature')}
          />

          <img
            src="https://cdn-icons-png.flaticon.com/512/1229/1229492.png"
            alt="umbrella icon"
            className="forecast--icon"
            style={{
              'background-color': currentTab === 'rainfall' ? 'orange' : '',
            }}
            onClick={() => setCurrentTab('rainfall')}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1247/1247109.png"
            alt="umbrella icon"
            className="forecast--icon"
            style={{
              'background-color': currentTab === 'wind' ? 'orange' : '',
            }}
            onClick={() => setCurrentTab('wind')}
          />
        </div>
      </div>
      {dailyWeatherData ? (
        <div className="grid-2x4">
          <div className="white-circle">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1247/1247109.png"
              alt="weather Icon"
              className="weather--Icon"
            />
          </div>
          <div className="white-circle">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1247/1247109.png"
              alt="weather Icon"
              className="weather--Icon"
            />
          </div>
          <div className="white-circle">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1247/1247109.png"
              alt="weather Icon"
              className="weather--Icon"
            />
          </div>
          <div className="white-circle">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1247/1247109.png"
              alt="weather Icon"
              className="weather--Icon"
            />
          </div>

          {currentTab === 'temperature' ? (
            <React.Fragment>
              <div>
                {dailyWeatherData.temp.morn.toFixed()} <span>&#8451;</span>
                <p>Morning</p>
              </div>
              <div>
                {dailyWeatherData.temp.day.toFixed()} <span>&#8451;</span>
                <p>Afternoon</p>
              </div>
              <div>
                {dailyWeatherData.temp.eve.toFixed()} <span>&#8451;</span>
                <p>Evening</p>
              </div>
              <div>
                {dailyWeatherData.temp.night.toFixed()} <span>&#8451;</span>
                <p>Night</p>
              </div>
            </React.Fragment>
          ) : currentTab === 'rainfall' ? (
            <React.Fragment>
              <div>
                {dailyWeatherData.rain.toFixed()}
                <p>Morning</p>
              </div>
              <div>
                {dailyWeatherData.rain.toFixed()}
                <p>Afternoon</p>
              </div>
              <div>
                {dailyWeatherData.rain.toFixed()}
                <p>Evening</p>
              </div>
              <div>
                {dailyWeatherData.rain.toFixed()}
                <p>Night</p>
              </div>
            </React.Fragment>
          ) : currentTab === 'wind' ? (
            <React.Fragment>
              <div>
                {dailyWeatherData.wind_speed}
                <p>Morning</p>
              </div>
              <div>
                {dailyWeatherData.wind_speed}
                <p>Afternoon</p>
              </div>
              <div>
                {dailyWeatherData.wind_speed}
                <p>Evening</p>
              </div>
              <div>
                {dailyWeatherData.wind_speed}
                <p>Night</p>
              </div>
            </React.Fragment>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
