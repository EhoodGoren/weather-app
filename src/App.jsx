import { useRef } from "react";
import { connect } from "react-redux";
import { getCityWeather } from './redux/actions/weatherActions';

function App(props) {
    const cityInput = useRef();

    const searchCity = () => {
        props.getCityWeather(cityInput.current.value, process.env.REACT_APP_API_KEY);
    }

    return (
        <div id="App">
            <input ref={cityInput} placeholder="Enter country name" />
            <button onClick={searchCity}>Submit</button>
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

export default connect(null, mapDispatchToProps)(App);
