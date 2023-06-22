"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImmutableFieldProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const field_1 = require("rx-store-form-plugin/dist/main/field");
const shared_1 = require("../shared");
const ImmutableFieldProvider = (props) => {
    const { field, autoBinding, children, targetId, targetSelector, type } = props;
    const ref = (0, shared_1.useImmutableBinding)(autoBinding);
    return ((0, jsx_runtime_1.jsx)("rx-immutable-field-component", Object.assign({ "data-field": field, "data-type": type, "data-target_id": targetId, "data-target_selector": targetSelector, ref: ref }, { children: children })));
};
exports.ImmutableFieldProvider = ImmutableFieldProvider;
//# sourceMappingURL=provider.js.map