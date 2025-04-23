import React, { useEffect, useState } from 'react';

interface WeatherProps {
    city: string;
}

interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
}

const CityWeather: React.FC<WeatherProps> = ({ city }) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (!city) return;

        const fetchWeather = async () => {
            setLoading(true);
            setError('');

            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f0718a20fd81a50c52fb019cc27d66d4&units=metric`
                );
                const data = await response.json();

                if (data.cod === '404') {
                    setError('Şehir bulunamadı');
                    setWeatherData(null);
                } else {
                    setWeatherData(data);
                }
            } catch (err) {
                setError('Bir hata oluştu');
                setWeatherData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city]);

    if (!city) return null;

    return (
        <div className="weather-card">
            {loading ? (
                <p>Yükleniyor...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                weatherData && (
                    <>
                        <h2>{weatherData.name}</h2>
                        <p><strong>Sıcaklık:</strong> {weatherData.main.temp}°C</p>
                        <p><strong>Nem:</strong> {weatherData.main.humidity}%</p>
                        <p><strong>Durum:</strong> {weatherData.weather[0].description}</p>
                        <img
                            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                            alt={weatherData.weather[0].description}
                        />
                    </>
                )
            )}
        </div>
    );
};

export default CityWeather;
