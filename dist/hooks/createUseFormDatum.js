"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseImmutableFormDatum = exports.createUseFormDatum = void 0;
const react_1 = require("react");
const createUseFormDatum = (formControl) => {
    const { observeFormDatum, getDatum } = formControl;
    return (field) => {
        const [datum, set] = (0, react_1.useState)(getDatum(field));
        (0, react_1.useEffect)(() => observeFormDatum(field, set), []);
        return datum;
    };
};
exports.createUseFormDatum = createUseFormDatum;
const createUseImmutableFormDatum = (formControl) => {
    const { observeFormDatum, getDatum } = formControl;
    return (field) => {
        const [datum, set] = (0, react_1.useState)(getDatum(field));
        (0, react_1.useEffect)(() => observeFormDatum(field, set), []);
        return datum;
    };
};
exports.createUseImmutableFormDatum = createUseImmutableFormDatum;
