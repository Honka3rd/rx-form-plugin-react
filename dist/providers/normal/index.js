"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNormalField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const provider_1 = require("./provider");
const createNormalField = (field, type) => (props) => {
    return (0, jsx_runtime_1.jsx)(provider_1.NormalFieldProvider, Object.assign({}, props, { field: field, type: type }));
};
exports.createNormalField = createNormalField;
