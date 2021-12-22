export default function weatherReducer(state = {}, action) {
    switch (action.type) {
        case 'FOUND_CITY':
            return {
                ...state,
                cityWeather: action.weather,
                iconSrc: action.iconSrc
            }
        case 'CITY_NOT_FOUND':
            return {
                ...state,
                cityWeather: 'not found',
                iconSrc: undefined
            }
        default:
            return state;
    }
}
