import React from 'react';
import './TimeZoneTemp.css';
import '../Common/Common.css';

export default function TimeZoneTemp({ weatherData }) {
  return (
    <div className="TimeZoneTemp">
      <div>
        <h2>Sun</h2>
        <p>
          {weatherData.timezone.split('/')[1]}{' '}
          {weatherData.timezone.split('/')[0]}
        </p>
      </div>
      <h1 className="tempOrange">
        {weatherData.current.temp.toFixed()}
        <span>&#8451;</span>
      </h1>
    </div>
  );
}
