import React from 'react';
import TimeZoneTemp from './TimeZoneTemp/TimeZoneTemp';

export default function ShowForecast({ weatherData }) {
  return ({weatherData ?
    
    <TimeZoneTemp weatherData={weatherData} />
    
    : null);
}
