import searchIcon from "../components/icons/search.svg";
import clear from "../assets/clear.png";
// import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import useWeather from "../hooks/useWeather";
import { useState } from "react";

function WeatherCard() {
  const [city, setCity] = useState<string>("");
  const [searchCity, setSearchCity] = useState<string>("Bangkok");
  const { weather, loading, error } = useWeather(searchCity);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    if (city.trim() === "") {
      alert("Please enter a valid city name.");
      return;
    }
    setSearchCity(city);
  };

  const temperatureCelsius = weather.main
    ? (weather.main.temp - 273.15).toFixed(2)
    : null;

  return (
    <div className="font-poppins bg-blue-50 h-screen flex justify-center items-center">
      <div className="bg-gradient-to-b from-blue-400 to-blue-700 p-6 rounded-lg flex flex-col items-center mx-5">
        <div className="flex gap-4">
          <input
            placeholder="search"
            className="bg-white rounded-full w-[237px] pl-5 p-3"
            onChange={handleChange}
          ></input>
          <button className="rounded-full p-4 bg-white" onClick={handleSearch}>
            <img src={searchIcon} className="w-4 h-4"></img>
          </button>
        </div>
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <img src={clear} className="w-[160px] h-[160px] my-4"></img>
            <p className="text-6xl text-white">{temperatureCelsius}°c</p>
            <p className="text-3xl mb-16 text-white">{weather?.name}</p>
            <div className="flex justify-center gap-18">
              <div className="flex items-center text-white gap-3">
                <img src={humidity} className="w-6 h-6"></img>
                <div className="flex flex-col items-center">
                  <p className="text-lg">{weather.main?.humidity} %</p>
                  <p className="text-sm">Humidity</p>
                </div>
              </div>
              <div className="flex items-center text-white gap-3">
                <img src={wind} className="w-7 h-7"></img>
                <div className="flex flex-col items-center">
                  <p className="text-lg">{weather.wind?.speed} Km/h</p>
                  <p className="text-sm">Wind Speed</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherCard;
