import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import Weatherforcast from './src/components/Weatherforcast/Weatherforcast';

function App() {
  return <Weatherforcast />;
}
render(<App />, document.getElementById('root'));
