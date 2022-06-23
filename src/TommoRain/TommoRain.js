import React from 'react';
import './TommoRain.css';
import '../Common/Common.css';

export default function TommoRain({ weatherData }) {
  return (
    <div class="tomo-forecast">
      {weatherData ? (
        <div class="rain-forecast">
          <div>
            <h4>tomorrow</h4>
            <h1>{weatherData.timezone.split('/')[1]}</h1>
          </div>
          <div>
            <h1>
              {weatherData.daily[0].temp.day.toFixed()}
              <span>&#8451;</span>
            </h1>
            <h4>
              {weatherData.daily[0].weather[0].main == 'Rain'
                ? weatherData.daily[0].weather[0].description
                : 'no rain'}
            </h4>
          </div>
        </div>
      ) : null}
    </div>
  );
}
