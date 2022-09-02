import React, { useEffect } from 'react';
import './WeatherForecast.css';
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

export default function WeatherForecast() {
  const weatherData = useSelector(selectCityWeatherData);
  const inputValue = useSelector(selectInputValue);

  const dispatch = useDispatch();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    dispatch(getLocationAsync(inputValue));
  };

  const updateInputValue = (updatedInputValue) => {
    dispatch(setInputValue(updatedInputValue));
  };

  return (
    <div className="grid-1x2">
      <div className="container1">
        <div className="grid-1x4">
          <h1 className="box-1">Hello,</h1>
          <Search setInputValue={updateInputValue} getLocation={getLocation} />
          <Weather currentWeatherData={weatherData?.current} />
          <Air currentWeatherData={weatherData?.current} />
        </div>
        <div className="forecast">
          <WeeklyForecast dailyWeatherData={weatherData?.daily[0]} />
          <TommoRain
            timezone={weatherData?.timezone}
            dailyWeatherData={weatherData?.daily[0]}
          />
        </div>
      </div>
      <div className="container2">
        <ShowForecast weatherData={weatherData} />
      </div>
    </div>
  );
}
