"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseImmutableFormMetaDatum = exports.createUseFormMetaDatum = void 0;
const react_1 = require("react");
const createUseFormMetaDatum = (formControl) => {
    const { observeMetaByField, getFieldMeta } = formControl;
    return (field) => {
        const [metaDatum, set] = (0, react_1.useState)(getFieldMeta(field));
        (0, react_1.useEffect)(() => observeMetaByField(field, set), []);
        return metaDatum;
    };
};
exports.createUseFormMetaDatum = createUseFormMetaDatum;
const createUseImmutableFormMetaDatum = (formControl) => {
    const { observeMetaByField, getFieldMeta } = formControl;
    return (field) => {
        const [metaDatum, set] = (0, react_1.useState)(getFieldMeta(field));
        (0, react_1.useEffect)(() => observeMetaByField(field, set), []);
        return metaDatum;
    };
};
exports.createUseImmutableFormMetaDatum = createUseImmutableFormMetaDatum;
