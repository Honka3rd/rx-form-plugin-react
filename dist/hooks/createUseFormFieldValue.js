"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseImmutableFormFieldValue = exports.createUseFormFieldValue = void 0;
const react_1 = require("react");
const createUseFormFieldValue = (formControl) => {
    const { observeFormValue, getDatumValue } = formControl;
    return (field) => {
        const [value, set] = (0, react_1.useState)(getDatumValue(field));
        (0, react_1.useEffect)(() => observeFormValue(field, set), []);
        return value;
    };
};
exports.createUseFormFieldValue = createUseFormFieldValue;
const createUseImmutableFormFieldValue = (formControl) => {
    const { observeFormValue, getDatumValue } = formControl;
    return (field) => {
        const [value, set] = (0, react_1.useState)(getDatumValue(field));
        (0, react_1.useEffect)(() => observeFormValue(field, set), []);
        return value;
    };
};
exports.createUseImmutableFormFieldValue = createUseImmutableFormFieldValue;
