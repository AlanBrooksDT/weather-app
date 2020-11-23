import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/forecast-summaries";

describe("ForecastSummaries", () => {
  const forecasts = [
      {
          date: 1525046400000,
          temperature: {
              max: 11
          },
          description: "Clear",
          icon: "800"
      },
      {
          date: 1525046400022,
          temperature: {
              max: 25
          },
          description: "Foggy",
          icon: "900"
      },
  ];

  it("renders the correct amount of ForecastSummary components", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={forecasts} />);

    expect(asFragment).toMatchSnapshot();
  });

  it("renders the correct amount of ForecastSummary component props", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={forecasts} />
    );

    expect(getAllByTestId("date-id")).toHaveLength(2);
    expect(getAllByTestId("description-id")).toHaveLength(2);
    expect(getAllByTestId("icon-id")).toHaveLength(2);
    expect(getAllByTestId("temperature-id")).toHaveLength(2);
  });
});
/*used the getAllByTestId method that comes bundled with render() in 
react-testing-library to find all the data test-id's within ForecastSummaries 
and compile them into an array. We then expect that array to have a length of 
2 as we have passed in two props for all our PropTypes. We've then done this 
for all the PropTypes to ensure they all render correctly.*/