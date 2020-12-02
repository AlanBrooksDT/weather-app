import React, {useEffect, useState} from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';

import '../styles/app.css';

const App = () => {

    const [forecasts, setForecasts] = useState([]);
    const [selectedDate, setSelectedDate] = useState([]);
    const [location, setLocation] = useState({
        city: "Manchester",
        country: "",
    });

    useEffect(() => {
        const getLocation = async () => {
            await axios
            .get("https://weather-app-alt.herokuapp.com/forecast?city=London")
            .then(response => {
                setForecasts(response.data.forecasts);
                setLocation(response.data.location);
            })
            .catch(err => console.log(err))
        };
        getLocation();
    }, []);

    console.log(forecasts);

    //const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);

   /* const handleForecastSelect = (date) => {
        setSelectedDate(date);
    }*/

    return (

    <div className="forecast">
        <LocationDetails
            city={location.city} //creating prop from prop of location.city created in parent (index)
            country={location.country}
        />

        <ForecastSummaries 
            forecasts={forecasts} 
            // onForecastSelect={handleForecastSelect} 
            /> <br></br>
            
        
    </div>
    );  
};

App.propTypes = {
    location: PropTypes.shape ({
        city: PropTypes.string,
        country: PropTypes.string,
    }).isRequired,
    forecasts: PropTypes.array.isRequired,
};

export default App;
