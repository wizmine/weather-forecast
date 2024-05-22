import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../configs/axios";
import { CurrentWeather, ForecastDay, Location, WeatherData } from "../../types/weather.types";

interface WeatherState {
  location: Location | null;
  current: CurrentWeather | null;
  forecast: ForecastDay[] | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: WeatherState = {
  location: null,
  current: null,
  forecast: null,
  status: "idle",
  error: null,
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ latitude, longitude }: { latitude: number; longitude: number }) => {
    const response = await axios.get("/forecast.json", {
      params: {
        key: "098ced1413384f118a4112848242205",
        q: `${latitude},${longitude}`,
        days: 14,
      },
    });
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<WeatherData>) => {
        state.status = "succeeded";
        state.location = action.payload.location;
        state.current = action.payload.current;
        state.forecast = action.payload.forecast.forecastday;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch weather data";
      });
  },
});

export default weatherSlice.reducer;
