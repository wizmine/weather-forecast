import React from "react";
import { ForecastDay } from "../../types/weather.types";
import styled from "styled-components";

type Props = {
  day: ForecastDay;
};

const Forecast = ({ day }: Props) => {
  return (
    <Container>
      <p>Date: {day.date}</p>
      <p>Max Temp: {day.day.maxtemp_c}°C</p>
      <p>Min Temp: {day.day.mintemp_c}°C</p>
      <p>Condition: {day.day.condition.text}</p>
    </Container>
  );
};

export default Forecast;

const Container = styled.div`
  padding: 1rem;
`;
