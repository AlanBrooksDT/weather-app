import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import advancedFormat from "dayjs/plugin/advancedFormat"

dayjs.extend(advancedFormat)

const ForecastDetails = props => {

  const { forecast } = props 
    return (
        <div className="forecast-details">
            <span className="forecast-details-date" data-testid='date-id'>{dayjs(forecast.date).format('MMMM Do, YYYY')}</span><br></br>
            <span className="maxTemperature" data-testid="maxTemperature-id">Max Temperature: {forecast.temperature.max}</span><br></br>
            <span className="minTemperature" data-testid="minTemperature-id">Min Temperautre: {forecast.temperature.min}</span><br></br>
            <span className="humidity" data-testid="humidity-id">Humidity: {forecast.humidity}</span><br></br>
            <span className="windSpeed" data-testid="windSpeed">Wind Speed: {forecast.wind.speed}</span><br></br>
        </div>
    )
}

ForecastDetails.propTypes = {
    forecast: PropTypes.shape({
      date: PropTypes.string.isRequired,
      maxTemperature: PropTypes.number.isRequired,
      minTtemperature: PropTypes.number.isRequired,
      humidity: PropTypes.string.isRequired,
      windSpeed: PropTypes.object.isRequired,
    }),
  };

export default ForecastDetails;
