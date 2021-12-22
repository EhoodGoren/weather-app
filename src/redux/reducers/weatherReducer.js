export default function weatherReducer(state = {}, action) {
    switch (action.type) {
        case 'FOUND_CITY':
            return {
                ...state,
                cityWeather: action.weather
            }
        case 'CITY_NOT_FOUND':
            return {
                ...state,
                cityWeather: undefined
            }
        default:
            return state;
    }
}
