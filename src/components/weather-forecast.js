import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";
const WeatherForecast = ({ data }) => {
    const dailyForecast = data.list.reduce((acc, forecast) => {
        const date = format(new Date(forecast.dt * 1000), "yyyy-MM-dd");
        if (!acc[date]) {
            acc[date] = {
                temp_min: forecast.main.temp_min,
                temp_max: forecast.main.temp_max,
                humidity: forecast.main.humidity,
                wind: forecast.wind.speed,
                weather: forecast.weather[0],
                date: forecast.dt,
            };
        }
        else {
            acc[date].temp_min = Math.min(acc[date].temp_min, forecast.main.temp_min);
            acc[date].temp_max = Math.max(acc[date].temp_max, forecast.main.temp_max);
        }
        return acc;
    }, {});
    const nextDays = Object.values(dailyForecast).slice(0, 5); // ✅ 5 days only
    const formatTemp = (temp) => `${Math.round(temp)}°`;
    return (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "5-Day Forecast" }) }), _jsx(CardContent, { children: _jsx("div", { className: "grid gap-4", children: nextDays.map((day) => (_jsxs("div", { className: "grid grid-cols-3 items-center gap-4 rounded-lg border p-4", children: [_jsx("p", { className: "font-medium", children: format(new Date(day.date * 1000), "EEE, MMM d") }), _jsx("p", { className: "text-sm text-muted-foreground capitalize", children: day.weather.description }), _jsxs("div", { className: "flex justify-end gap-4", children: [_jsxs("span", { className: "flex items-center text-blue-500", children: [_jsx(ArrowDown, { className: "mr-1 h-4 w-4" }), formatTemp(day.temp_min)] }), _jsxs("span", { className: "flex items-center text-red-500", children: [_jsx(ArrowUp, { className: "mr-1 h-4 w-4" }), formatTemp(day.temp_max)] })] })] }, day.date))) }) })] }));
};
export default WeatherForecast;
