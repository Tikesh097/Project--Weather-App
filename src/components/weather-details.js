import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { format } from "date-fns";
import { Compass, Gauge, Sunrise, Sunset } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
const WeatherDetails = ({ data }) => {
    const { wind, main, sys } = data;
    const getWindDirection = (degree) => {
        const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        const index = Math.round(((degree %= 360) < 0 ? degree + 360 : degree) / 45) % 8;
        return directions[index];
    };
    const formatTime = (timestamp) => {
        return format(new Date(timestamp * 1000), "h:mm:a");
    };
    const details = [
        {
            title: "Sunrise",
            value: formatTime(sys.sunrise),
            icon: Sunrise,
            color: "text-orange-500",
        },
        {
            title: "Sunset",
            value: formatTime(sys.sunset),
            icon: Sunset,
            color: "text-blue-500",
        },
        {
            title: "Wind Direction",
            value: `${getWindDirection(wind.deg)} (${wind.deg}°)`,
            icon: Compass,
            color: "text-green-500",
        },
        {
            title: "Pressure",
            value: `${main.pressure} hPa`,
            icon: Gauge,
            color: "text-purple-500",
        },
    ];
    return (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Weather Details" }) }), _jsx(CardContent, { children: _jsx("div", { className: "grid gap-6 sm:grid-cols-2", children: details.map((details) => {
                        return (_jsxs("div", { className: "flex items-center gap-3 rounded-lg border p-4", children: [_jsx(details.icon, { className: `h-5 w-5 ${details.color}` }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium leading-none", children: details.title }), _jsx("p", { className: "text-sm text-muted-foreground", children: details.value })] })] }, details.title));
                    }) }) })] }));
};
export default WeatherDetails;
