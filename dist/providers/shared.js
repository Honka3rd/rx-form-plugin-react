"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClassName = void 0;
const react_1 = require("react");
const useClassName = (ref, className) => {
    const prevClassName = (0, react_1.useRef)();
    (0, react_1.useLayoutEffect)(() => {
        const { current } = ref;
        if (!current) {
            return;
        }
        const previous = prevClassName.current;
        if (className !== previous && className && previous) {
            current.classList.replace(previous, className);
            prevClassName.current = className;
            return;
        }
        if (!className && previous) {
            current.classList.remove(previous);
            prevClassName.current = className;
            return;
        }
        if (className && !previous) {
            current.classList.add(className);
            prevClassName.current = className;
        }
    }, [className]);
};
exports.useClassName = useClassName;
//# sourceMappingURL=shared.js.map