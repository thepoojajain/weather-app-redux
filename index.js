import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import Weatherforcast from './src/Weatherforcast/Weatherforcast';

function App() {
  return <Weatherforcast />;
}
render(<App />, document.getElementById('root'));
