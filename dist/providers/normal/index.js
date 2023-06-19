"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNormalField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const provider_1 = require("./provider");
const createNormalField = () => (props) => {
    return (0, jsx_runtime_1.jsx)(provider_1.NormalFieldProvider, Object.assign({}, props));
};
exports.createNormalField = createNormalField;
