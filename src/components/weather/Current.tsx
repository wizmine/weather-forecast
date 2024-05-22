import React from "react";
import { CurrentWeather, Location } from "../../types/weather.types";

type Props = {
  location: Location;
  current: CurrentWeather;
};

const Current = ({ location, current }: Props) => {
  return (
    <div>
      <p>
        Location: {location.name}, {location.region}, {location.country}
      </p>
      <p>Temperature: {current.temp_c}°C</p>
      <p>Condition: {current.condition.text}</p>
    </div>
  );
};

export default Current;
