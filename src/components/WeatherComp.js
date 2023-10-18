import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { getTodayDate } from "../todayDate";

const WeatherComp = ({ city }) => {

    const [weatherObj, setWeatherObj] = useState({});
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("טוען נתונים...");

    const cityRef = useRef();

    const searchCityWeather = async (e) => {
        e.preventDefault();
        let cityName = cityRef.current.value;
        if (!cityName)
            setMessage("יש להקליד עיר/ארץ בשדה החיפוש")
        city(cityName);
        try {
            setLoading(true);
            const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=64cd513da356063b49bc3bdd79b3742e&units=metric&lang=he`);
            setWeatherObj(resp.data);
            setLoading(false);
        } catch (error) {
            if (error.response.status === 404)
                setMessage("עיר/ארץ לא נמצאת")
        }
    }

    useEffect(() => {
        async function getDataFromServer() {
            const resp = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Jerusalem&appid=64cd513da356063b49bc3bdd79b3742e&units=metric&lang=he");
            setWeatherObj(resp.data);
            setLoading(false);
        }
        getDataFromServer();
    }, [])

    return (
        <>
            {/* <h2>ב{weatherObj.name}</h2> */}
            <p>{getTodayDate()}</p>
            <div className="search-container">
                <input type="search" ref={cityRef} placeholder="הקלד שם עיר/ארץ" />
                <button type="submit" onClick={searchCityWeather}>חפש</button>
            </div>
            {!loading ?
                <div>{weatherObj.weather && weatherObj.weather.map((x, index) => {
                    return <div key={index}>
                        <p>{x.description}</p>
                        <p>{weatherObj.main.temp_max}° - {weatherObj.main.temp_min}°</p>
                        <img src={`/assets/${x.main}.png`} alt={x.description} width={200} />
                    </div>
                })}</div>
                :
                <p>{message}</p>}
        </>
    )
}

export default WeatherComp;