import './Result.css'

function Result(props) {
    const generateResult = () => {
        if(!props.weather) return
        if(props.weather === 'not found') return <div>Can't find city</div>
        const weatherData = props.weather.data;
        return (
            <div id='result'>
                <div className="city-name">{weatherData.name}</div>
                <div className="temp">{weatherData.main.temp}</div>
                <div className="weather-description">{weatherData.weather[0].main}</div>
                <img
                    alt='Weather icon'
                    src={props.iconSrc}
                    className="weather-icon"
                ></img>
            </div>
        )
    }

    return(
        <>
            {generateResult()}
        </>
    )
}

export default Result;