import axios from "axios"
import { useEffect, useState } from "react"

const Weather = ({ country }) => {
    const [weather, setWeather] = useState({})
    const req = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER}&query=${country}`
    useEffect(() => {
        axios.get(req).then((res) => {
            setWeather(res.data)
            console.log("Api req made")
        }, (err) => {
            console.log("req failed")
        }, []).finally(() => console.log(country.name))
    })

    const {
        current: {
            observation_time: last_updated,
            temperature, //℃
            weather_icons, // url[]
            weather_descriptions, //string[]
            wind_speed,
            wind_dir, // Char N,S,E,W
            precip,
            humidity,
            cloudcover,
            feelslike,
        }
    } = weather
    return (<div>
        <h2>Weather</h2>
        <h3>Its {weather_descriptions[0]}</h3>
        <img src={weather_icons[0]} alt={`It's currently ${weather_descriptions[0]}`}></img>
        <table>
            <tr>
                <td>Feels Like</td>
                <td>{feelslike}</td>
            </tr>
            <tr>
                <td>Temp</td>
                <td>{temperature}</td>
            </tr>
            <tr>
                <td>Wind</td>
                <td>{wind_speed} km/hr due {wind_dir}</td>
            </tr>
            <tr>
                <td>Humidity</td>
                <td>{humidity}</td>
            </tr>
        </table>

        <p><em>Last updated {last_updated}</em></p>
    </div>)
}

export default Weather