"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImmutableField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const provider_1 = require("./provider");
const createImmutableField = (field, type) => (props) => {
    return (0, jsx_runtime_1.jsx)(provider_1.ImmutableFieldProvider, Object.assign({}, props, { field: field, type: type }));
};
exports.createImmutableField = createImmutableField;
