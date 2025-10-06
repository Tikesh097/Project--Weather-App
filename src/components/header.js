import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import CitySearch from "./city-search";
const Header = () => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";
    return (_jsx("header", { className: "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60", children: _jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4", children: [_jsx(Link, { to: "/", children: _jsx("img", { src: isDark ? "logo blue-removebg.png" : "logo green-removebg.png", alt: "Tapman Logo", className: "h-14" }) }), _jsxs("div", { className: "flex gap-4", children: [_jsx(CitySearch, {}), _jsx("div", { onClick: () => setTheme(isDark ? "light" : "dark"), className: `flex items-center cursor-pointer transition-transform duration-500
                            ${isDark ? "rotate-180" : "rotat-0"}
                            `, children: isDark ? (_jsx(Sun, { className: "h-6 w-6 text-yellow-500 rotate-0 transition-all" })) : (_jsx(Moon, { className: "h-6 w-6 text-blue-500 rotate-0 transition-all" })) })] })] }) }));
};
export default Header;
