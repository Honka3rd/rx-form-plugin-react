"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClassName = void 0;
const react_1 = require("react");
const useClassName = (ref, className) => {
    const prevClassName = (0, react_1.useRef)();
    (0, react_1.useLayoutEffect)(() => {
        var _a;
        const { current } = ref;
        if (!current) {
            return;
        }
        const classes = className === null || className === void 0 ? void 0 : className.split(" ").filter((c) => c.trim().length);
        const previous = (_a = prevClassName.current) === null || _a === void 0 ? void 0 : _a.split(" ").filter((c) => c.trim().length);
        if (className !== prevClassName.current &&
            (classes === null || classes === void 0 ? void 0 : classes.length) &&
            (previous === null || previous === void 0 ? void 0 : previous.length)) {
            previous.forEach((c) => {
                if (c === null || c === void 0 ? void 0 : c.trim().length) {
                    current.classList.remove(c);
                }
            });
            classes.forEach((c) => {
                if (c === null || c === void 0 ? void 0 : c.trim().length) {
                    current.classList.add(c);
                }
            });
            prevClassName.current = className;
            return;
        }
        if (!className && (previous === null || previous === void 0 ? void 0 : previous.length)) {
            previous.forEach((c) => {
                if (c === null || c === void 0 ? void 0 : c.trim().length) {
                    current.classList.remove(c);
                }
            });
            prevClassName.current = className;
            return;
        }
        if ((classes === null || classes === void 0 ? void 0 : classes.length) && !(previous === null || previous === void 0 ? void 0 : previous.length)) {
            classes.forEach((c) => {
                if (c === null || c === void 0 ? void 0 : c.trim().length) {
                    current.classList.add(c);
                }
            });
            prevClassName.current = className;
        }
    }, [className]);
};
exports.useClassName = useClassName;
//# sourceMappingURL=shared.js.map