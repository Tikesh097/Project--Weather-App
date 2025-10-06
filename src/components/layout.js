import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from './header';
const Layout = ({ children }) => {
    return _jsxs("div", { className: 'bg-gradient-to-br from-background to-muted', children: [_jsx(Header, {}), _jsx("main", { className: 'min-h-screen container mx-auto px-4 py-8', children: children }), _jsx("footer", { className: 'border-t backdrop:-blur py-12 supports-[backdrop-filter]:bg-background/60', children: _jsx("div", { className: 'container mx-auto px-4 text-center text-gray-400', children: _jsx("p", { children: "All Rights Reserved : Tikesh Aswale" }) }) })] });
};
export default Layout;
