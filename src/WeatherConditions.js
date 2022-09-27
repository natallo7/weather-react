import React from "react";
import "./WeatherConditions.css";

export default function WeatherConditions() {
  let weatherData = {
    timestamp: "Tuesday 16:57",
    humidity: 50,
    wind: 5,
  };

  return (
    <ul>
      <li className="timestamp">
        Last updated: <strong>{weatherData.timestamp}</strong>
      </li>
      <br />
      <li>
        <img src="img/humidity.svg" alt="" width="35" />
        <span> {weatherData.humidity} </span>%
      </li>
      <li>
        <img src="img/wind.svg" alt="" width="35" />
        <span> {weatherData.wind} </span> m/h
      </li>
    </ul>
  );
}
