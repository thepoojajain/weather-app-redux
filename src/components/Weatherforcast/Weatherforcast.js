import React, { useState, useEffect } from 'react';
import './Weatherforcast.css';
import '../../styles.css';
import Weather from '../Weather/Weather';
import Air from '../Air/Air';
import Search from '../Search/Search';
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast';
import TommoRain from '../TommoRain/TommoRain';
import ShowForecast from '../ShowForecast/ShowForecast';

import {
  getLocationAsync,
  selectCityWeatherData,
  selectInputValue,
} from '../../store/reducers/weatherReducer';

import { useSelector, useDispatch } from 'react-redux';

export default function Weatherforcast() {
  // const [weatherData, setWeatherData] = useState();
  // const [inputValue, setInputValue] = useState('Sydney');
  //const APIKey = '6a4ce2c1a5f3b6720fde60a7c83736f5';

  const weatherData = useSelector(selectCityWeatherData);
  const inputValue = useSelector(selectInputValue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationAsync());
    // getLocation();
  }, []);

  /* const getLocation = () => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=${APIKey}`
    )
      .then((res) => res.json())
      .then((cityData) => getWeatherData(cityData[0].lat, cityData[0].lon));
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
  }; */

  return (
    <div class="grid-1x2">
      <div class="container1">
        <div class="grid-1x4">
          <h1 class="box-1">Hello,</h1>
          <Search setInputValue={setInputValue} getLocation={getLocation} />
          <Weather currentWeatherData={weatherData?.current} />
          <Air currentWeatherData={weatherData?.current} />
        </div>
        <div class="forecast">
          <WeeklyForecast dailyWeatherData={weatherData?.daily[0]} />
          <TommoRain
            timezone={weatherData?.timezone}
            dailyWeatherData={weatherData?.daily[0]}
          />
        </div>
      </div>
      <div class="container2">
        <ShowForecast weatherData={weatherData} />
      </div>
    </div>
  );
}
