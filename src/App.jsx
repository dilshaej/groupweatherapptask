import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import './App.css'; 
import cloudimg from './cloud.png';


function App() {
  const [cityInput, setCityInput] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);

  const getWeatherInfo = async () => {
    if (!cityInput) {
      alert('Please enter a city name.');
      return;
    }
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`);
      const weatherData = await response.json();
      setWeatherInfo(weatherData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
   <div className='div1'>
      <div  className=' d-flex justify-content-center align-items-center' style={{width:'100%',height:'100vh'}}>
        <div style={{width:'600px'}} className="bg-info p-5 rounded">
        <header className="App-header">
          <h1 className="mb-3">Weather App</h1>
          <InputGroup className="mb-3 rounded p-3">
            <Form.Control
              placeholder="Enter City Name"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
            />
            <Button variant="outline-light" onClick={getWeatherInfo}> <i class="fa-solid fa-magnifying-glass"></i>
  </Button>
  
          </InputGroup>
  
         
  
          {weatherInfo && (
            <div className="weather-info">
              <h2 className="mt-3">{weatherInfo.name}, {weatherInfo.sys.country}</h2>
              <p>Temperature: {weatherInfo.main.temp}°C</p>
              <p>Feels like: {weatherInfo.main.feels_like}°C</p>
              <p>Weather: {weatherInfo.weather[0].main}</p>
              <p>Humidity: {weatherInfo.main.humidity}%</p>
              <p>Wind Speed: {weatherInfo.wind.speed} m/s</p>
              <p>Pressure: {weatherInfo.main.pressure} hPa</p>
            </div>
          )}
        </header>
  </div>
  
      </div>
   </div>
  );
}

export default App;
