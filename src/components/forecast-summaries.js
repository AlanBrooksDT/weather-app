import React from 'react';
import ForecastSummary from './forecast-summary'
import PropTypes from 'prop-types'

import '../styles/forecast-summaries.css';

const ForecastSummaries = ({ forecasts, onForecastSelect }) => ( //pulls in explicit props, forecasts and onForecastSelect from parent (app)
    <div className="forecast-summaries">
        {
            forecasts.map(forecast => (
                <ForecastSummary
                  key={forecast.date}
                  date={forecast.date}
                  description={forecast.description}
                  icon={forecast.icon}
                  temperature={forecast.temperature.max}
                  // onSelect={onForecastSelect}
                />
            ))
        }
    </div>
);

ForecastSummaries.propTypes = {
    
    forecasts: PropTypes.array.isRequired,
    onForecastSelect: PropTypes.func.isRequired,
    
}

export default ForecastSummaries;