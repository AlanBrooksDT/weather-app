import React from 'react';
import PropTypes from 'prop-types';

const LocationDetails = ({city, country}) => <h1 className="location-details">{city}, {country}</h1>;

LocationDetails.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
};

export default LocationDetails;