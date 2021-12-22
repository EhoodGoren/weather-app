import axios from 'axios';

export const getCityWeather = (name, apiKey) => async dispatch => {
    try {
        const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`);
        dispatch({ type: 'FOUND_CITY', weather: weatherData });
    } catch(error) {
        dispatch({type: 'CITY_NOT_FOUND'})
    }
}
