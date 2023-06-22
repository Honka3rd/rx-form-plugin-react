"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImmutableField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const provider_1 = require("./provider");
const react_1 = require("react");
const hooks_1 = require("../../hooks");
const createImmutableField = (formControl, field, type) => {
    const useFormDatum = (0, hooks_1.createUseFormDatum)(formControl);
    const useFormMetadata = (0, hooks_1.createUseFormMetaDatum)(formControl);
    return ({ children, autoBinding, targetId, targetSelector }) => {
        const datum = useFormDatum(field);
        const metadata = useFormMetadata(field);
        const only = react_1.Children.only(children);
        if (!(0, react_1.isValidElement)(only)) {
            return null;
        }
        return ((0, jsx_runtime_1.jsx)(provider_1.ImmutableFieldProvider, Object.assign({ targetId: targetId, targetSelector: targetSelector, field: field, type: type, autoBinding: autoBinding }, { children: (0, react_1.cloneElement)(only, Object.assign(Object.assign({}, only.props), { datum,
                metadata })) })));
    };
};
exports.createImmutableField = createImmutableField;
//# sourceMappingURL=index.js.map