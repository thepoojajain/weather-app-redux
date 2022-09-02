import React from 'react';
import './TimeZoneTemp.css';
import '../../styles.css';

export default function TimeZoneTemp({ timezone, currentWeatherData }) {
  return (
    <div className="TimeZoneTemp">
      <div>
        <h2>Sun</h2>
        <p>
          {timezone.split('/')[1]} {timezone.split('/')[0]}
        </p>
      </div>
      <h1 className="tempOrange">
        {currentWeatherData.temp.toFixed()}
        <span>&#8451;</span>
      </h1>
    </div>
  );
}
