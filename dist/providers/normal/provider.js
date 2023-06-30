"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalFieldProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const NormalFieldProvider = (props) => {
    const { field, children, type, autoBinding, targetId, targetSelector } = props;
    return ((0, jsx_runtime_1.jsx)("rx-field-component", Object.assign({ "data-field": field, "data-type": type, "data-target_id": targetId, "data-target_selector": targetSelector, "data-manual_binding": autoBinding ? "false" : "true", ref: ref }, { children: children })));
};
exports.NormalFieldProvider = NormalFieldProvider;
//# sourceMappingURL=provider.js.map