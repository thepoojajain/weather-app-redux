import React from 'react';
import './TommoRain.css';
import '../../styles.css';

export default function TommoRain({ timezone, dailyWeatherData }) {
  return (
    <div class="tomo-forecast">
      {dailyWeatherData ? (
        <div class="rain-forecast">
          <div>
            <h4>tomorrow</h4>
            <h1>{timezone.split('/')[1]}</h1>
          </div>
          <div>
            <h1>
              {dailyWeatherData.temp.day.toFixed()}
              <span>&#8451;</span>
            </h1>
            <h4>
              {dailyWeatherData.weather[0].main == 'Rain'
                ? dailyWeatherData.weather[0].description
                : 'no rain'}
            </h4>
          </div>
        </div>
      ) : null}
    </div>
  );
}
