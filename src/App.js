import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { ThemeProvider } from "./context/theme-provider";
import WeatherDashboard from "./Pages/weather-Dashboard";
import { CityPage } from "./Pages/citypage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/sonner";
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, //5 minutes
            gcTime: 10 * 60 * 1000, //10 minutes
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
});
function App() {
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(BrowserRouter, { children: _jsxs(ThemeProvider, { defaultTheme: "dark", children: [_jsx(Layout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(WeatherDashboard, {}) }), _jsx(Route, { path: "/city/:cityName", element: _jsx(CityPage, {}) })] }) }), _jsx(Toaster, { richColors: true })] }) }) }));
}
export default App;
