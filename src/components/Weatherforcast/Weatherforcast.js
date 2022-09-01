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
  setInputValue,
} from '../../store/reducers/weatherReducer';

import { useSelector, useDispatch } from 'react-redux';

export default function Weatherforcast() {
  const weatherData = useSelector(selectCityWeatherData);
  const inputValue = useSelector(selectInputValue);

  const dispatch = useDispatch();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    dispatch(getLocationAsync());
  };

  const updateInputValue = (updatedInputValue) => {
    dispatch(setInputValue(updatedInputValue));
  };

  return (
    <div class="grid-1x2">
      <div class="container1">
        <div class="grid-1x4">
          <h1 class="box-1">Hello,</h1>
          <Search setInputValue={updateInputValue} getLocation={getLocation} />
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
