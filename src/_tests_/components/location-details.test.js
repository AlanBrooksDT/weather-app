import React from 'react';
import { render } from "@testing-library/react";
import LocationDetails from '../../components/location-details';

it('renders the correct city and locaiton props', () => {
   const { getByText } = render(
       <LocationDetails city="Manchester" country="UK" />
   ); 

   expect(getByText("Manchester, UK")).toHaveClass("location-details");
});