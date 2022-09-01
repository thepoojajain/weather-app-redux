import { createSlice } from '@reduxjs/toolkit';

const APIKey = '6a4ce2c1a5f3b6720fde60a7c83736f5';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    inputValue: 'Sydney',
    cityData: {
      lat: null,
      lon: null,
    },
    cityWeatherData: null,
    value: 0,
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setCityData: (state, action) => {
      state.cityData = action.payload;
    },
    setCityWeatherData: (state, action) => {
      state.cityWeatherData = action.payload;
    },
  },
});

export const { setInputValue, setCityData, setCityWeatherData } =
  weatherSlice.actions;

export const getLocationAsync = (inputValue) => (dispatch) => {
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=${APIKey}`
  )
    .then((res) => res.json())
    .then((cityData) => {
      const [cityDataToSet] = cityData;
      const { lat, lon } = cityDataToSet;
      dispatch(setCityData(cityDataToSet));
      dispatch(getWeatherDataAsync(lat, lon));
    });
};

export const getWeatherDataAsync = (lat, lon) => (dispatch) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${APIKey}&units=metric`
  )
    .then((res) => res.json())
    .then((cityWeatherData) => dispatch(setCityWeatherData(cityWeatherData)));
};

export const selectCityWeatherData = (state) => state.weather.cityWeatherData;

export const selectInputValue = (state) => state.weather.inputValue;

export default weatherSlice.reducer;
