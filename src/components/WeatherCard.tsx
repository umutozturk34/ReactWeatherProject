import React from 'react';

interface WeatherCardProps {
    data: {
        name: string;
        main: {
            temp: number;
            humidity: number;
        };
        weather: Array<{
            description: string;
            icon: string;
        }>;
    };
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
    return (
        <div className="weather-card">
            <h2>{data.name}</h2>
            <p>{data.weather[0].description}</p>
            <h3>{data.main.temp}°C</h3>
            <p>Nem: {data.main.humidity}%</p>
        </div>
    );
};

export default WeatherCard;
