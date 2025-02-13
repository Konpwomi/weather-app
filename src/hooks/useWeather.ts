import axios from "axios"
import { useState, useEffect } from "react"
import { weatherType } from "../types/weatherType"

// 646bbd85409c12c97172c68241ec6885
// city:string

const useWeather = (city: string): { weather: weatherType; loading: boolean; error: string | null} => {
    const [weather, setWeather] = useState<weatherType>({} as weatherType);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect (()=> {
        const fetchWeather = async () => {
            try {
                setLoading(true)
                setError(null)
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=646bbd85409c12c97172c68241ec6885`)
                setWeather(response.data)
            } catch (err) {
                if (axios.isAxiosError(err) && err.response?.status === 404) {
                    setError("City not found !");
                  } else {
                    setError("Failed to fetch weather data");
                  }
            } finally {
                setLoading(false)
            }
        }
        if (city) {
            fetchWeather()
        }
    },[city])

    return { weather, loading, error}
}

export default useWeather


