import React from 'react';
import TimeZoneTemp from '../TimeZoneTemp/TimeZoneTemp';
import SunsetSunriseChart from '../SunsetSunriseChart/SunsetSunriseChart';
import UVRays from '../UVRays/UVRays';
import WeatherPrediction from '../WeatherPrediction/WeatherPrediction';
import './ShowForecast.css';

export default function ShowForecast({ weatherData }) {
  return (
    <div className="showForecast">
      {weatherData ? (
        <React.Fragment>
          <TimeZoneTemp
            timezone={weatherData.timezone}
            currentWeatherData={weatherData.current}
          />
          <SunsetSunriseChart weatherData={weatherData} />
          <UVRays UVI={weatherData.current.uvi} />
          <WeatherPrediction dailyWeatherData={weatherData.daily} />
        </React.Fragment>
      ) : null}
    </div>
  );
}
