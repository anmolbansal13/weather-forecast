import './App.css'
import Card from './components/Card.jsx';
import Header from './components/Header.jsx';
import Current from './components/Current.jsx';
import { useState } from "react";

function App() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const KEY = '23dd6253d33145e6b7e115429240809';
  const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?`;
  async function fetchData(){
    if(cityName==='') return;
    const URL = `${BASE_URL}key=${KEY}&q=${cityName}&days=5&aqi=no&alerts=no`
    const response = await fetch(URL);
    if(response.status===200){
      const data = await response.json();
      setWeatherData(data);
      // console.log(weatherData);
    }
  }
  return (
    <div className='wrapper'>
      <Header cityName={cityName} setCityName={setCityName} onSearch={fetchData}/>
      {weatherData ? <Current weatherData={weatherData}/> :''} 
      {weatherData ? <div className="card-list">
        <Card data={weatherData.forecast.forecastday[0]}/>
        <Card data={weatherData.forecast.forecastday[1]}/>
        <Card data={weatherData.forecast.forecastday[2]}/>
        <Card data={weatherData.forecast.forecastday[3]}/>
        <Card data={weatherData.forecast.forecastday[4]}/>
      </div> : ""
      }
    </div>
  )
}

export default App;
