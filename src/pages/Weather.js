import React ,{useState} from "react";
import WeatherDisplay from "../component/WeatherDisplay";
import SearchForm from "../component/SearchForm";


const Weather = () => {

    const [weather, setWeather] = useState(null);

    return(
        <>

            <SearchForm setWeather={setWeather} />
            <WeatherDisplay weather={weather} />
        </>
    );



}

export default Weather;