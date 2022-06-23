import React from 'react';

export default function TimeZoneTemp({ weatherData }) {
  return (
    <div>
      <div>
        <h1>SUN</h1>
        <p>
          {weatherData.timezone.split('/')[1]}{' '}
          {weatherData.timezone.split('/')[0]}
        </p>
      </div>
      <h1>
        {weatherData.current.temp.toFixed()}
        <span>&#8451;</span>
      </h1>
    </div>
  );
}
