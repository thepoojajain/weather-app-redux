import React from 'react';
import TimeZoneTemp from './TimeZoneTemp/TimeZoneTemp';

export default function ShowForecast({ weatherData }) {
  return (
    <div>
      {weatherData ? <TimeZoneTemp weatherData={weatherData} /> : null};
    </div>
  );
}
