import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './src/store/store';
import WeatherForecast from './src/components/WeatherForecast/WeatherForecast';

function App() {
  return (
    <Provider store={store}>
      <WeatherForecast />
    </Provider>
  );
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
