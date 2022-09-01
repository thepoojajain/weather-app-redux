import React from 'react';
import { render } from 'react-dom';
import Weatherforcast from './src/components/Weatherforcast/Weatherforcast';

import store from './src/store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Weatherforcast />
    </Provider>
  );
}
render(<App />, document.getElementById('root'));
