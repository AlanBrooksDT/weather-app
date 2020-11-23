import React from 'react';
import { render } from "@testing-library/react";
import ForecastSummary from '../../components/forecast-summary';

describe("ForecastSummary", () => {

    it('renders', () => {
        const { asFragment } = render(
            <ForecastSummary
                date={1525046400000}
                temperature={30}
                description='testDesc'
                icon='800'
            />
        )

        expect(asFragment()).toMatchSnapshot();
    })

    it('renders a number of props into a weather summary', () => {
        const { getByText, getByTestId } = render(
            <ForecastSummary
                date={1525046400000}
                temperature={9}
                description='Clear'
                icon='800'
            />
        )

        expect(getByText('April 30th, 2018')).toBeTruthy();
        expect(getByText('April 30th, 2018')).toHaveClass('forecast-summary-date');
        expect(getByTestId('temperature-id')).toHaveClass('temperature');
        expect(getByText('Clear')).toHaveClass('description');
    })
})