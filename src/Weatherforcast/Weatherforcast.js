import React, { Component, useState, useEffect } from 'react';
import './Weatherforcast.css';
import '../Common/Common.css';
import Weather from '../Weather/Weather';
import Air from '../Air/Air';
import Search from '../Search/Search';
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast';
import TommoRain from '../TommoRain/TommoRain';
import ShowForecast from '../ShowForecast/ShowForecast';

export default function Weatherforcast() {
  const [weatherData, setWeatherData] = useState();
  const [inputValue, setInputValue] = useState('');
  const APIKey = '6a4ce2c1a5f3b6720fde60a7c83736f5';
  /*useEffect(() => {
   
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`
    )
      .then((res) => res.json())
      .then((dataToSet) => {
        setWeatherData(dataToSet);
        console.log(dataToSet);
      });
  }, []); */

  const getLocation = () => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=${APIKey}`
    )
      .then((res) => res.json())
      .then((cityData) => {
        cityData.map((city) => {
          getWeatherData(city.lat, city.lon);
        });
      });
  };

  const getWeatherData = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${APIKey}&units=metric`
    )
      .then((res) => res.json())
      .then((cityWeatherData) => {
        setWeatherData(cityWeatherData);
        console.log(cityWeatherData);
      });
  };

  return (
    <div class="grid-1x2">
      <div class="container1">
        <div class="grid-1x4">
          <h1 class="box-1">Hello,</h1>
          <Search setInputValue={setInputValue} getLocation={getLocation} />
          <Weather weatherData={weatherData} />
          <Air weatherData={weatherData} />
        </div>
        <div class="forecast">
          <WeeklyForecast weatherData={weatherData} />
          <TommoRain weatherData={weatherData} />
        </div>
      </div>
      <div class="container2">
        <ShowForecast weatherData={weatherData} />
      </div>
    </div>
  );
}
