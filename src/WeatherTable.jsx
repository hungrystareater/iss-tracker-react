import React from "react";


const WeatherTable = ({ data }) => {
    //console.log('WeatherTable.jsx');
    //console.log(data);
    if (data === null) {
        return (
            <div className='weather'>Loading...</div>
        );
    }
    if (typeof data.current === 'undefined' && typeof data.location === 'undefined') {
        return (
            <div className='weather'>
                <br />
                <p>No weather data.. It's {data.onWater ? 'water' : 'an unknown land'}..</p>
                <p><br />Latitude (vertical): {data.lat}°<br />Longitude (horizontal): {data.lon}°</p>
            </div>
        );
    }
    return (
        <div className='weather'>
            <h1 className='weather__location-name'>
                <img src={data.current.condition.icon}></img>
                {typeof data.location.name !== 'undefined' ? (data.onWater ? 'Water' : data.location.name) : 'Unknown'}
            </h1>
            <table>
                <tbody>
                    <tr>
                        <td><p className='weather__'><b>Weather</b></p></td>
                        <td><p className='weather__'>{typeof data.current.condition.text !== 'undefined' ? data.current.condition.text : 'Unknown'}</p></td>
                        <td><p className='weather__country'>Country</p></td>
                        <td><p className='weather__country'>{typeof data.location.country !== 'undefined' ? data.location.country : 'Unknown'}</p></td>
                    </tr>
                    <tr>
                        <td><p className='weather__'>Temperature</p></td>
                        <td><p className='weather__'>{typeof data.current.temp_c !== 'undefined' ? data.current.temp_c : 'Unknown'} C</p></td>
                        <td><p className='weather__region'>Region</p></td>
                        <td><p className='weather__region'>{typeof data.location.region !== 'undefined' ? data.location.region : 'Unknown'}</p></td>
                    </tr>
                    <tr>
                        <td><p className='weather__'>Wind</p></td>
                        <td><p className='weather__'>{typeof data.current.wind_kph !== 'undefined' ? data.current.wind_kph : 'Unknown'} km/h</p></td>
                        <td><p className='weather__'>Date and time</p></td>
                        <td><p className='weather__localtime'>{typeof data.location.localtime !== 'undefined' ? data.location.localtime : 'Unknown'}</p></td>
                    </tr>
                    <tr>
                        <td><p className='weather__'>Cloud coverage</p></td>
                        <td><p className='weather__'>{typeof data.current.cloud !== 'undefined' ? data.current.cloud : 'Unknown'}%</p></td>
                    </tr>
                    <tr>
                        <td><p className='weather__'>Humidity</p></td>
                        <td><p className='weather__'>{typeof data.current.humidity !== 'undefined' ? data.current.humidity : 'Unknown'}%</p></td>
                    </tr>
                    <tr>
                        <td><p className='weather__'>Is day</p></td>
                        <td><p className='weather__'>{typeof data.current.is_day !== 'undefined' ? data.current.is_day : 'Unknown'}</p></td>
                    </tr>
                    <tr>
                        <td><p className='weather__'>Last updated</p></td>
                        <td><p className='weather__'>{typeof data.current.last_updated !== 'undefined' ? data.current.last_updated : 'Unknown'}</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WeatherTable;