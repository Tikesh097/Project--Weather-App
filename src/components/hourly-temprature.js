import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { format } from "date-fns";
const HourlyTemprature = ({ data }) => {
    const chartData = data.list.slice(0, 8).map((item) => ({
        time: format(new Date(item.dt * 1000), "ha"),
        temp: Math.round(item.main.temp),
        feels_like: Math.round(item.main.feels_like),
    }));
    return (_jsxs(Card, { className: 'flex-1', children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Today's Temprature" }) }), _jsx(CardContent, { children: _jsx("div", { className: 'h-[200px] w-full', children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { data: chartData, children: [_jsx(XAxis, { dataKey: "time", stroke: '#888888', fontSize: 12, tickLine: false, axisLine: false }), _jsx(YAxis, { stroke: '#888888', fontSize: 12, tickLine: false, axisLine: false, tickFormatter: (value) => `${value}°` }), _jsx(Tooltip, { content: ({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            return (_jsx("div", { className: 'rounded-lg border bg-background p-2 shadow-sm', children: _jsxs("div", { className: 'grid grid-cols-2 gap-2', children: [_jsxs("div", { className: 'flex flex-col', children: [_jsx("span", { className: 'text-[0.70rem] uppercase text-muted-foreground', children: "Temprature " }), _jsxs("span", { className: 'font-bold', children: [payload[0].value, "\u00B0"] })] }), _jsxs("div", { className: 'flex flex-col', children: [_jsx("span", { className: 'text-[0.70rem] uppercase text-muted-foreground', children: "Feels Like " }), _jsxs("span", { className: 'font-bold', children: [payload[1].value, "\u00B0"] })] })] }) }));
                                        }
                                        return null;
                                    } }), _jsx(Line, { type: "monotone", dataKey: "temp", stroke: '#2563eb', strokeWidth: 2, dot: false }), _jsx(Line, { type: "monotone", dataKey: "feels_like", stroke: '#64748b', strokeWidth: 2, dot: false, strokeDasharray: "5 5" })] }) }) }) })] }));
};
export default HourlyTemprature;
