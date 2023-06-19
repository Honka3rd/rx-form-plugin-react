"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseImmutableFormData = exports.createUseFormData = void 0;
const react_1 = require("react");
const createUseFormData = (formControl) => {
    const { observeFormData, getFormData } = formControl;
    return (fields) => {
        const [formData, set] = (0, react_1.useState)(getFormData(fields));
        (0, react_1.useEffect)(() => observeFormData(set, fields), []);
        return formData;
    };
};
exports.createUseFormData = createUseFormData;
const createUseImmutableFormData = (formControl) => {
    const { observeFormData, getFormData } = formControl;
    return (fields) => {
        const [formData, set] = (0, react_1.useState)(getFormData(fields));
        (0, react_1.useEffect)(() => observeFormData(set, fields), []);
        return formData;
    };
};
exports.createUseImmutableFormData = createUseImmutableFormData;
