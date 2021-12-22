import axios from 'axios';

export const getCityWeather = (name, apiKey) => async dispatch => {
    try {
        const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`);
        const weatherIcon = await axios.get(`https://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`, { responseType: 'blob'});
        const iconSrc = URL.createObjectURL(weatherIcon.data);
        dispatch({ type: 'FOUND_CITY', weather: weatherData, iconSrc });
    } catch(error) {
        console.log(error);
        dispatch({type: 'CITY_NOT_FOUND'})
    }
}
