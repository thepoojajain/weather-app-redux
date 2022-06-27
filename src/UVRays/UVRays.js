import React from 'react';
import './UVRays.css';

export default function UVRays({ weatherData }) {
  return (
    <div className="card">
      <div>
        <img
          src="https://img.freepik.com/free-vector/sun-icon-bright-yellow-sol-symbol-with-rays-childish-simple-style_53562-14613.jpg?"
          alt="Sun-Image"
          className="sun-icon"
        />
      </div>
      <div>
        <h3>{weatherData.current.uvi} UVI</h3>
      </div>
    </div>
  );
}
