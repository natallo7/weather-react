import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import WeatherConditions from "./WeatherConditions";
import Search from "./Search";
import Footer from "./Footer";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Amsterdam",
    temperature: 30,
    description: "Sunny",
    imgUrl: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg",
  };

  return (
    <div className="weather">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <div className="weather-info">
            <Search />
            <div className="row">
              <div className="col-6">
                <h1>{weatherData.city}</h1>
                <WeatherConditions />
              </div>
              <div className="col-6">
                <div className="current-temperature-container d-flex justify-content-end">
                  <div className="clearfix current-temperature-container">
                    <img
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                      className="float-left weather-icon"
                      width="140"
                    />
                    <div className="float-left">
                      <div>
                        <strong className="description">
                          {weatherData.description}
                        </strong>
                      </div>
                      <br />
                      <span className="temperature">
                        {weatherData.temperature}
                      </span>
                      <span className="units">°C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="weather-forecast"></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
