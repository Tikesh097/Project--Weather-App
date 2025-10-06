import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from './ui/button';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, } from './ui/command';
import { Clock, Loader2, Search, Star, XCircle } from 'lucide-react';
import { useLocationSearch } from '@/hook/use-weather';
import { useNavigate } from 'react-router-dom';
import { useSearchHistory } from '@/hook/use-search-history';
import { format } from 'date-fns';
import { useFavorites } from '@/hook/use-favorite';
const CitySearch = () => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const { data: locations, isLoading } = useLocationSearch(query);
    const { history = [], clearHistory, addToHistory } = useSearchHistory();
    const { favorites = [] } = useFavorites();
    const handleSelect = (cityData) => {
        const [lat, lon, name, country] = cityData.split("|");
        // Add to search history
        addToHistory.mutate({
            query,
            name,
            lat: parseFloat(lat),
            lon: parseFloat(lon),
            country,
        });
        setOpen(false);
        navigate(`/city/${name}?lat=${lat}&lon=${lon}`);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Button, { variant: "outline", className: "relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64", onClick: () => setOpen(true), children: [_jsx(Search, { className: "mr-2 h-4 w-4" }), "Search cities..."] }), _jsxs(CommandDialog, { open: open, onOpenChange: setOpen, children: [_jsx(CommandInput, { placeholder: "Search cities...", value: query, onValueChange: setQuery }), _jsxs(CommandList, { children: [query.length > 2 && !isLoading && (_jsx(CommandEmpty, { children: "No cities found." })), favorites.length > 0 && (_jsx(CommandGroup, { heading: "Favorites", children: favorites.map((city) => (_jsxs(CommandItem, { value: `${city.lat}|${city.lon}|${city.name}|${city.country}`, onSelect: handleSelect, children: [_jsx(Star, { className: "mr-2 h-4 w-4 text-yellow-500" }), _jsx("span", { children: city.name }), city.state && (_jsxs("span", { className: "text-sm text-muted-foreground", children: [", ", city.state] })), _jsxs("span", { className: "text-sm text-muted-foreground", children: [", ", city.country] })] }, city.id))) })), history.length > 0 && (_jsxs(_Fragment, { children: [_jsx(CommandSeparator, {}), _jsxs(CommandGroup, { children: [_jsxs("div", { className: "flex items-center justify-between px-2 my-2", children: [_jsx("p", { className: "text-xs text-muted-foreground", children: "Recent Searches" }), _jsxs(Button, { variant: "ghost", size: "sm", onClick: () => clearHistory.mutate(), children: [_jsx(XCircle, { className: "h-4 w-4" }), "Clear"] })] }), history.map((item) => (_jsxs(CommandItem, { value: `${item.lat}|${item.lon}|${item.name}|${item.country}`, onSelect: handleSelect, children: [_jsx(Clock, { className: "mr-2 h-4 w-4 text-muted-foreground" }), _jsx("span", { children: item.name }), item.state && (_jsxs("span", { className: "text-sm text-muted-foreground", children: [", ", item.state] })), _jsxs("span", { className: "text-sm text-muted-foreground", children: [", ", item.country] }), _jsx("span", { className: "ml-auto text-xs text-muted-foreground", children: format(new Date(item.searchedAt), "MMM d, h:mm a") })] }, item.id)))] })] })), _jsx(CommandSeparator, {}), locations && locations.length > 0 && (_jsxs(CommandGroup, { heading: "Suggestions", children: [isLoading && (_jsx("div", { className: "flex items-center justify-center p-4", children: _jsx(Loader2, { className: "h-4 w-4 animate-spin" }) })), locations?.map((location) => (_jsxs(CommandItem, { value: `${location.lat}|${location.lon}|${location.name}|${location.country}`, onSelect: handleSelect, children: [_jsx(Search, { className: "mr-2 h-4 w-4" }), _jsx("span", { children: location.name }), location.state && (_jsxs("span", { className: "text-sm text-muted-foreground", children: [", ", location.state] })), _jsxs("span", { className: "text-sm text-muted-foreground", children: [", ", location.country] })] }, `${location.lat}-${location.lon}`)))] }))] })] })] }));
};
export default CitySearch;
