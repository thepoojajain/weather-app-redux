import React from 'react';
import './UVRays.css';

export default function UVRays({ UVI }) {
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
        <h3>{UVI} UVI</h3>
      </div>
    </div>
  );
}
