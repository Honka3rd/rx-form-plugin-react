"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImmutableFieldProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ImmutableFieldProvider = (props) => {
    const { field, autoBinding, children, targetId, targetSelector, type } = props;
    return ((0, jsx_runtime_1.jsx)("rx-immutable-field-component", Object.assign({ "data-field": field, "data-type": type, "data-target_id": targetId, "data-target_selector": targetSelector, "data-manual_binding": autoBinding ? "false" : "true", ref: ref }, { children: children })));
};
exports.ImmutableFieldProvider = ImmutableFieldProvider;
//# sourceMappingURL=provider.js.map