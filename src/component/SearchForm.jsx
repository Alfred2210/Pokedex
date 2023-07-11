import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchForm = ({setWeather} ) => {


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (city) {
                    const response = await axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8eca94e8477fd9c1ba924fa1a9e9fa3c&units=metric`
                    );
                    setWeather(response.data);
                    console.log(response.data);
                    console.table(response.data);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [city,setWeather ]);

    if (loading) {
        return <div>Loading...</div>;
    }



    return (
        <div className={"test"}>
            <input type="search" id="search"
                   className="block mx-auto w-5/6 p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Search" required
                   onChange={(e) => setCity(e.target.value)}
            />
        </div>
    );




};

export default SearchForm;
