"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseImmutableFormPartialMeta = exports.createUseFormPartialMeta = void 0;
const react_1 = require("react");
const createUseFormPartialMeta = (formControl, comparator) => {
    const { observeMetaByFields, getFieldsMeta } = formControl;
    return (fields) => {
        const [metadata, set] = (0, react_1.useState)(getFieldsMeta(fields));
        const fieldsRef = (0, react_1.useRef)(fields);
        (0, react_1.useEffect)(() => observeMetaByFields(fieldsRef.current, set, comparator), []);
        return metadata;
    };
};
exports.createUseFormPartialMeta = createUseFormPartialMeta;
const createUseImmutableFormPartialMeta = (formControl) => {
    const { observeMetaByFields, getFieldsMeta } = formControl;
    return (fields) => {
        const [metadata, set] = (0, react_1.useState)(getFieldsMeta(fields));
        const fieldsRef = (0, react_1.useRef)(fields);
        (0, react_1.useEffect)(() => observeMetaByFields(fieldsRef.current, set), []);
        return metadata;
    };
};
exports.createUseImmutableFormPartialMeta = createUseImmutableFormPartialMeta;
//# sourceMappingURL=createUseFormPartialMeta.js.map