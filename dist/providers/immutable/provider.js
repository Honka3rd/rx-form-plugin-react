"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImmutableFieldProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const shared_1 = require("../shared");
const ImmutableFieldProvider = (props) => {
    const { field, autoBinding, children, targetId, targetSelector, type, className } = props, rest = __rest(props, ["field", "autoBinding", "children", "targetId", "targetSelector", "type", "className"]);
    const ref = (0, react_1.useRef)(null);
    (0, shared_1.useClassName)(ref, className);
    return ((0, jsx_runtime_1.jsx)("rx-immutable-field-component", Object.assign({ "data-field": field, "data-type": type, "data-target_id": targetId, "data-target_selector": targetSelector, "data-manual_binding": autoBinding ? "false" : "true", ref: ref }, rest, { children: children })));
};
exports.ImmutableFieldProvider = ImmutableFieldProvider;
//# sourceMappingURL=provider.js.map