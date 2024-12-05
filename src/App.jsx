import "./App.css";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Current from "./components/Current.jsx";
import { useState } from "react";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?`;
  async function fetchData() {
    if (cityName === "") return;
    try {
      const URL = `${BASE_URL}key=${KEY}&q=${cityName}&days=5&aqi=no&alerts=no`;
      const response = await fetch(URL);
      if (response.status === 200) {
        const data = await response.json();
        setWeatherData(data);
        // console.log(data);
      }
    } catch (error) {
      // console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  }
  return (
    <div className="container">
      <h1 className="app-name">WEATHER APP</h1>
      <div className="wrapper">
        <Header
          cityName={cityName}
          setCityName={setCityName}
          onSearch={fetchData}
        />
        {weatherData ? (
          <>
            <Current weatherData={weatherData} />
            <div className="card-list">
              {weatherData.forecast.forecastday
                .slice(0, 5)
                .map((day, index) => (
                  <Card key={index} data={day} />
                ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="footer">Made with React ❤</div>
    </div>
  );
}

export default App;
