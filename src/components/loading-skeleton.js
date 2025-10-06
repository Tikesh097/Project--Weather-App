import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton } from "./ui/skeleton";
function WeatherSkeleton() {
    return (_jsx("div", { className: "space-y-6", children: _jsxs("div", { className: "grid gap-6", children: [_jsx(Skeleton, { className: "h-[300px] w-full rounded-lg" }), _jsx(Skeleton, { className: "h-[300px] w-full rounded-lg" }), _jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [_jsx(Skeleton, { className: "h-[300px] w-full rounded-lg" }), _jsx(Skeleton, { className: "h-[300px] w-full rounded-lg" })] })] }) }));
}
export default WeatherSkeleton;
