"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseImmutableFormMetadata = exports.createUseFormMetadata = void 0;
const react_1 = require("react");
const createUseFormMetadata = (formControl) => {
    const { observeMeta, getMeta } = formControl;
    return () => {
        const [metadata, set] = (0, react_1.useState)(getMeta());
        (0, react_1.useEffect)(() => observeMeta(set), []);
        return metadata;
    };
};
exports.createUseFormMetadata = createUseFormMetadata;
const createUseImmutableFormMetadata = (formControl) => {
    const { observeMeta, getMeta } = formControl;
    return () => {
        const [metadata, set] = (0, react_1.useState)(getMeta());
        (0, react_1.useEffect)(() => observeMeta(set), []);
        return metadata;
    };
};
exports.createUseImmutableFormMetadata = createUseImmutableFormMetadata;
//# sourceMappingURL=createUseFormMetadata.js.map