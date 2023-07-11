import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from "../component/SearchForm";


const WeatherDisplay = ({ weather }) => {
    if (!weather) {
        return null; // Return null if data is not available yet
    }

    const name = weather.name;
    const temperature = weather.main.temp;
    const description = weather.weather[0].description;
    const humidity = weather.main.humidity;
    const icon = weather.weather[0].icon;
    const url = `https://openweathermap.org/img/w/${icon}.png`;

    return (


            <div
               className="block mx-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 margin-top: 8rem space-y-6">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">{name}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Temp : {temperature}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400"> Ressenti : {description}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">Humidite : {humidity}</p>
                {icon === "01d" && (
                    <img src={url} alt="weather icon" className="w-20 h-20 mx-auto"/>
                )}
                {icon === "10d" && (
                    <img src={url} alt="weather icon" className="w-20 h-20 mx-auto"/>
                )}
                {icon === "04d" && (
                    <img src={url} alt="weather icon" className="w-20 h-20 mx-auto"/>
                )}
            </div>

    )



};

export default WeatherDisplay;
