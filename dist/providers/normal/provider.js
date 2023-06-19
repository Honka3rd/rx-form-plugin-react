"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalFieldProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const NormalFieldProvider = (props) => {
    const { field, children, placeholder, defaultValue, type } = props;
    return ((0, jsx_runtime_1.jsx)("rx-field-component", Object.assign({ "data-field": field, "data-type": type, defaultValue: defaultValue, placeholder: placeholder }, { children: children })));
};
exports.NormalFieldProvider = NormalFieldProvider;
