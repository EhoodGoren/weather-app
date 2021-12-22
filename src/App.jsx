import { useRef } from "react";
import { connect } from "react-redux";
import { getCityWeather } from './redux/actions/weatherActions';
import Result from "./Result";
import './App.css';

function App(props) {
    const cityInput = useRef();

    const searchCity = () => {
        props.getCityWeather(cityInput.current.value, process.env.REACT_APP_API_KEY);
    }

    return (
        <div id="app">
            <h1>City Weather</h1><br />
            <input className="city-input" ref={cityInput} placeholder="Enter city name" /><br />
            <button className="city-submit" onClick={searchCity}>Submit</button><br />
            <Result weather={props.cityWeather} iconSrc={props.iconSrc} />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCityWeather: (name, apiKey) => {
            dispatch(getCityWeather(name, apiKey))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        cityWeather: state.cityWeather,
        iconSrc: state.iconSrc
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
