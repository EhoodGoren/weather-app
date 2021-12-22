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
        <div id="App">
            <input ref={cityInput} placeholder="Enter city name" />
            <button onClick={searchCity}>Submit</button>
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
