import React, { useEffect, useState } from "react";
import { fetchWeather } from "../redux/slices/weather";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Forecast from "../components/weather/Forecast";
import Current from "../components/weather/Current";
import styled from "styled-components";
import SwitchButton from "../components/shared/SwitchButton";

const Weather = () => {
  const dispatch = useAppDispatch();
  const { location, current, forecast, status, error } = useAppSelector((state) => state.weather);
  const [days, setDays] = useState(7);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchWeather({ latitude, longitude }));
        },
        () => {
          console.error("Unable to retrieve your location.");
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser.");
    }
  }, [dispatch]);



  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <h1>Current Weather</h1>
      {current && location && <Current location={location} current={current} />}
      <SwitchButton setDays={setDays} switcher={3} text="3-Days" />
      <SwitchButton setDays={setDays} switcher={7} text="Week" />
      <SwitchButton setDays={setDays} switcher={14} text="2 Weeks" />
      <h2>{days}-Day Forecast</h2>
      {forecast && (
        <List>
          {forecast.slice(0, days).map((day) => (
            <Forecast day={day} key={day.date} />
          ))}
        </List>
      )}
    </Container>
  );
};

export default Weather;

const Container = styled.div`
  padding: 1rem;
`;

const List = styled.div`
  display: flex;
`;
