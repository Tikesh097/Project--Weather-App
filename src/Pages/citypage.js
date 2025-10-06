import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, useSearchParams } from "react-router-dom";
import { useWeatherQuery, useForecastQuery } from "@/hook/use-weather";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import CurrentWeather from "../components/current-weather";
import HourlyTemperature from "../components/hourly-temprature";
import WeatherDetails from "../components/weather-details";
import WeatherForecast from "../components/weather-forecast";
import WeatherSkeleton from "../components/loading-skeleton";
import { FavoriteButton } from "@/components/favourite-button";
export function CityPage() {
    const [searchParams] = useSearchParams();
    const params = useParams();
    const lat = parseFloat(searchParams.get("lat") || "0");
    const lon = parseFloat(searchParams.get("lon") || "0");
    const coordinates = { lat, lon };
    const weatherQuery = useWeatherQuery(coordinates);
    const forecastQuery = useForecastQuery(coordinates);
    if (weatherQuery.error || forecastQuery.error) {
        return (_jsxs(Alert, { variant: "destructive", children: [_jsx(AlertTriangle, { className: "h-4 w-4" }), _jsx(AlertDescription, { children: "Failed to load weather data. Please try again." })] }));
    }
    if (!weatherQuery.data || !forecastQuery.data || !params.cityName) {
        return _jsx(WeatherSkeleton, {});
    }
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("h1", { className: "text-3xl font-bold tracking-tight", children: [params.cityName, ", ", weatherQuery.data.sys.country] }), _jsx("div", { className: "flex gap-2", children: _jsx(FavoriteButton, { data: { ...weatherQuery.data, name: params.cityName } }) })] }), _jsxs("div", { className: "grid gap-6", children: [_jsx(CurrentWeather, { data: weatherQuery.data }), _jsx(HourlyTemperature, { data: forecastQuery.data }), _jsxs("div", { className: "grid gap-6 md:grid-cols-2 items-start", children: [_jsx(WeatherDetails, { data: weatherQuery.data }), _jsx(WeatherForecast, { data: forecastQuery.data })] })] })] }));
}
