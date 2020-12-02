import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import dayjs from 'dayjs'
import advancedFormat from "dayjs/plugin/advancedFormat"

dayjs.extend(advancedFormat)

const ForecastSummary = props => { //pulls in all props set in parent (app)
    return (
        <div className="forecast-summary">
            <span className="forecast-summary-date" data-testid='date-id'>{dayjs(props.date).format('MMMM Do, YYYY')}</span><br></br>
            <span className="temperature" data-testid="temperature-id"> {props.temperature}</span><br></br>
            <span className="description" data-testid="description-id">{props.description}</span><br></br>
            <span className="forecast-summary-icon" data-testid='icon-id'><WeatherIcon name="owm" iconId={props.icon} /></span><br></br><br></br>
            <button onClick={() => props.onSelect(props.date)}>More details</button>
        </div>
    )
}

ForecastSummary.propTypes = {
    forecast: PropTypes.shape({
      date: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
      onSelect: PropTypes.func.isRequired,
    }),
  };

export default ForecastSummary;