import { useState, useEffect } from 'react';
import styles from '../App.module.css';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get user's location
        if (!navigator.geolocation) {
          throw new Error('Geolocation is not supported');
        }

        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const apiKey = import.meta.env.VITE_APP_OPENWEATHER_API_KEY;

            if (!apiKey) {
              console.warn('OpenWeather API key not configured');
              setLoading(false);
              return;
            }

            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
            );

            if (!response.ok) {
              throw new Error('Failed to fetch weather data');
            }

            const data = await response.json();
            setWeather({
              temp: Math.round(data.main.temp),
              description: data.weather[0].main,
              city: data.name,
              icon: getWeatherIcon(data.weather[0].main),
            });
          },
          (error) => {
            console.warn('Geolocation error:', error.message);
            setLoading(false);
          }
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (description) => {
    const desc = description.toLowerCase();
    if (desc.includes('clear') || desc.includes('sunny')) return '☀️';
    if (desc.includes('cloud')) return '☁️';
    if (desc.includes('rain')) return '🌧️';
    if (desc.includes('snow')) return '❄️';
    if (desc.includes('wind')) return '💨';
    if (desc.includes('thunder')) return '⛈️';
    if (desc.includes('mist') || desc.includes('fog')) return '🌫️';
    return '🌤️';
  };

  if (loading || error) {
    return null;
  }

  if (!weather) {
    return null;
  }

  return (
    <div className={styles['weather-card']}>
      <div className={styles['weather-icon']}>{weather.icon}</div>
      <div className={styles['weather-info']}>
        <div className={styles['weather-temp']}>{weather.temp}°C</div>
        <div className={styles['weather-desc']}>{weather.description}</div>
      </div>
    </div>
  );
}

export default Weather;
