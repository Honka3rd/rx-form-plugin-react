"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalFieldProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const field_1 = require("rx-store-form-plugin/dist/main/field");
const NormalFieldProvider = (props) => {
    const { field, children, placeholder, defaultValue, type } = props;
    const ref = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        const { current } = ref;
        if (current instanceof field_1.FormFieldComponent) {
            current.setAttrBinder(() => { });
        }
    }, []);
    return ((0, jsx_runtime_1.jsx)("rx-field-component", Object.assign({ "data-field": field, "data-type": type, defaultValue: defaultValue, placeholder: placeholder, ref: ref }, { children: children })));
};
exports.NormalFieldProvider = NormalFieldProvider;
