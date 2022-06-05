import { useState, useEffect } from 'react';
import './reset.scss';
import './App.scss';

import WeatherTable from './WeatherTable';
import ISSStream from './ISSStream';
import OLMap from "./OLMap";
import Controls from "./Controls";

function App() {
  let [data, setData] = useState(null);

  const getAPIData = async () => {
    let response, issCoords, onWater, weather;
    const ISS_API_URL = 'http://api.open-notify.org/iss-now.json';
    const WEATHER_API_URL = 'https://api.weatherapi.com/v1/current.json?key={your-api-key}&q=';
    const ONWATER_API_URL = 'https://api.onwater.io/api/v1/results/';

    response = await fetch(ISS_API_URL);
    issCoords = await response.json();
    //console.log(`${issCoords.iss_position.latitude} ${issCoords.iss_position.longitude}`);

    response = await fetch(
      `${ONWATER_API_URL}${issCoords.iss_position.latitude},${issCoords.iss_position.longitude}?access_token={your-api-key}`);
    onWater = await response.json();
    //console.log(`APP.js onWater: ${onWater.water}`);

    if (!onWater.water) {
      response = await fetch(`${WEATHER_API_URL}${issCoords.iss_position.latitude},${issCoords.iss_position.longitude}`);
      weather = await response.json();
      //console.log(weather);

      weather.onWater = false;
    }
    else {
      let debug;
      if (debug = false) {
        //to not wait till ISS flies over land when debugging
        response = await fetch(`${WEATHER_API_URL}-33.8688,151.2093`);
        weather = await response.json();
      }
      else {
        weather = {};
        weather.lon = issCoords.iss_position.longitude;
        weather.lat = issCoords.iss_position.latitude;
        weather.onWater = true;
      }
    }

    if (window.synced) {
      window.timers.push(setTimeout((weather) => {
        console.log((new Date()).toString().split(' ')[4]);
        console.log(weather);
        setData(weather);
      }, 34000, { ...weather }));
    }
    else {
      console.log((new Date()).toString().split(' ')[4]);
      console.log(weather);
      setData(weather);
    }
  }

  useEffect(() => {
    getAPIData();
    setInterval(getAPIData, 5000);
  }, []);

  return (
    <div id='container'>
      <ISSStream width={(window.innerWidth - 10) / 2} height={(window.innerWidth - 10) / 2 * 0.562} />
      <OLMap />
      <WeatherTable data={data} />
      <Controls />
    </div>
  );
}

export default App;