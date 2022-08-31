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
          <TimeZoneTemp weatherData={weatherData} />
          <SunsetSunriseChart weatherData={weatherData} />
          <UVRays weatherData={weatherData} />
          <WeatherPrediction weatherData={weatherData} />
        </React.Fragment>
      ) : null}
    </div>
  );
}
