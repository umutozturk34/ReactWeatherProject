import React, { useState } from 'react';
import './App.css';
import CityWeather from './CityWeather';

const useDebounce = (func: Function, delay: number) => {
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    return (args: any) => {
        if (timer) clearTimeout(timer);
        const newTimer = setTimeout(() => func(args), delay);
        setTimer(newTimer);
    };
};

const App = () => {
    const [city, setCity] = useState<string>('');
    const [searchedCity, setSearchedCity] = useState<string>('');
    const [error, setError] = useState<string>('');

    const defaultCities = ['İstanbul', 'Ankara', 'İzmir', 'Paris', 'Sakarya'];

    const fetchWeather = async (city: string) => {
        if (!city) return;
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f0718a20fd81a50c52fb019cc27d66d4&units=metric`
            );
            const data = await response.json();
            if (data.cod === '404') {
                setError('Şehir bulunamadı. Lütfen geçerli bir şehir adı girin.');
                setSearchedCity('');
            } else {
                setSearchedCity(city);
                setError('');
            }
        } catch {
            setError('Bir hata oluştu. Lütfen tekrar deneyin.');
            setSearchedCity('');
        }
    };

    const debounceFetchWeather = useDebounce(fetchWeather, 500);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setCity(inputValue);
        debounceFetchWeather(inputValue);
    };

    return (
        <div className="app">
            <h1>Weather App</h1>
            <form>
                <input
                    type="text"
                    value={city}
                    onChange={handleInputChange}
                    placeholder="Şehir adı girin"
                />
            </form>

            {error && <div className="error-message">{error}</div>}

            <div className="search-result">
                {searchedCity && <CityWeather city={searchedCity} />}
            </div>

            <div className="default-cities">
                {defaultCities.map((defaultCity) => (
                    <CityWeather key={defaultCity} city={defaultCity} />
                ))}
            </div>
        </div>
    );
};

export default App;
