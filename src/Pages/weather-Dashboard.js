import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CurrentWeather from "@/components/current-weather";
import HourlyTemprature from "@/components/hourly-temprature";
import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import WeatherDetails from "@/components/weather-details";
import WeatherForecast from "@/components/weather-forecast";
import { useGeolocation } from "@/hook/use-geolocation";
import { useForecastQuery, useReverseGeocodeQuery, useWeatherQuery } from "@/hook/use-weather";
import { AlertTriangle, MapPin, RefreshCcw } from "lucide-react";
import { FavoriteCities } from "@/components/favorite-cities";
const WeatherDashboard = () => {
    const { coordinates, error: locationError, getLocation, isLoading: locationLoading } = useGeolocation();
    const weatherQuery = useWeatherQuery(coordinates);
    const forecastQuery = useForecastQuery(coordinates);
    const locationQuery = useReverseGeocodeQuery(coordinates);
    const handleRefresh = () => {
        getLocation();
        if (coordinates) {
            weatherQuery.refetch();
            forecastQuery.refetch();
            locationQuery.refetch();
        }
    };
    if (locationLoading) {
        return _jsx(WeatherSkeleton, {});
    }
    if (locationError) {
        return (_jsxs(Alert, { variant: "destructive", children: [_jsx(AlertTriangle, { className: "h-4 w-4" }), _jsx(AlertTitle, { children: "Location Error" }), _jsxs(AlertDescription, { className: "flex flex-col gap4", children: [_jsx("p", { children: locationError }), _jsxs(Button, { onClick: getLocation, variant: "outline", className: "w-fit", children: [_jsx(MapPin, { className: "mr-2 h-4 w-4" }), "Enable Location"] })] })] }));
    }
    if (!coordinates) {
        return (_jsxs(Alert, { variant: "destructive", children: [_jsx(AlertTitle, { children: "Location Required" }), _jsxs(AlertDescription, { className: "flex flex-col gap4", children: [_jsx("p", { children: "Please enable location access to see your local weather." }), _jsxs(Button, { onClick: getLocation, variant: "outline", className: "w-fit", children: [_jsx(MapPin, { className: "mr-2 h-4 w-4" }), "Enable Location"] })] })] }));
    }
    const locationName = locationQuery.data?.[0];
    if (weatherQuery.error || forecastQuery.error) {
        return (_jsxs(Alert, { variant: "destructive", children: [_jsx(AlertTriangle, { className: "h-4 w-4" }), _jsx(AlertTitle, { children: "Error" }), _jsxs(AlertDescription, { className: "flex flex-col gap4", children: [_jsx("p", { children: "Failed to fetch weather data. Please try again" }), _jsxs(Button, { onClick: handleRefresh, variant: "outline", className: "w-fit", children: [_jsx(RefreshCcw, { className: "mr-2 h-4 w-4" }), "Retry"] })] })] }));
    }
    if (!weatherQuery.data || !forecastQuery.data) {
        return _jsx(WeatherSkeleton, {});
    }
    //------------------------- UI PART -------------------------------
    return (_jsxs("div", { className: "space-y-4", children: [_jsx(FavoriteCities, {}), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h1", { className: "text-xl font-bold tracking-tight", children: "My Location" }), _jsx(Button, { variant: "outline", size: "icon", onClick: handleRefresh, disabled: weatherQuery.isFetching || forecastQuery.isFetching, children: _jsx(RefreshCcw, { className: `h-4 w-4 ${weatherQuery.isFetching ? "animate-spin origin-center" : ""}` }) })] }), _jsxs("div", { className: "grid gap-6", children: [_jsxs("div", { className: "flex flex-col lg:flex-row gap-4", children: [_jsx(CurrentWeather, { data: weatherQuery.data, locationName: locationName }), _jsx(HourlyTemprature, { data: forecastQuery.data })] }), _jsxs("div", { className: "grid gap-6 md:grid-cols-2 items-start", children: [_jsx(WeatherDetails, { data: weatherQuery.data }), _jsx(WeatherForecast, { data: forecastQuery.data })] })] })] }));
};
export default WeatherDashboard;
