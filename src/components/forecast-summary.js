import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => {
    return (
        <div className="forecast-summary">
            <span className="date">{props.date}</span>
            <span className="temperature"> {props.temperature}</span>
            <span className="description">{props.description}</span>
            <span className="icon">{props.icon}</span>
        </div>
    )
}

ForecastSummary.propTypes = {
    forecast: PropTypes.shape({
      date: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
    }),
  };

export default ForecastSummary;