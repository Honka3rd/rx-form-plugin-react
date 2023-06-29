"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImmutableDynamicField = exports.createImmutableField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const provider_1 = require("./provider");
const react_1 = require("react");
const hooks_1 = require("../../hooks");
const createImmutableField = (formControl, field, type) => {
    const useFormDatum = (0, hooks_1.createUseImmutableFormDatum)(formControl);
    const useFormMetadata = (0, hooks_1.createUseImmutableFormMetaDatum)(formControl);
    const change = (value) => {
        formControl.changeFormValue(field, value);
    };
    return ({ children, autoBinding, targetId, targetSelector, forwardedProps, }) => {
        const datum = useFormDatum(field);
        const metadata = useFormMetadata(field);
        const only = react_1.Children.only(children);
        if (!(0, react_1.isValidElement)(only)) {
            return null;
        }
        return ((0, jsx_runtime_1.jsx)(provider_1.ImmutableFieldProvider, Object.assign({ targetId: targetId, targetSelector: targetSelector, field: field, type: type, autoBinding: autoBinding }, { children: (0, react_1.cloneElement)(only, Object.assign(Object.assign(Object.assign({}, forwardedProps), only.props), { datum,
                metadata,
                change })) })));
    };
};
exports.createImmutableField = createImmutableField;
const ImmutableDynamicField = ({ formControl, field, type, children, autoBinding, targetId, targetSelector, forwardedProps, }) => {
    const useFormDatum = (0, react_1.useMemo)(() => (0, hooks_1.createUseImmutableFormDatum)(formControl), []);
    const useFormMetadata = (0, react_1.useMemo)(() => (0, hooks_1.createUseImmutableFormMetaDatum)(formControl), []);
    const datum = useFormDatum(field);
    const metadata = useFormMetadata(field);
    const only = react_1.Children.only(children);
    const change = (0, react_1.useCallback)((value) => {
        formControl.changeFormValue(field, value);
    }, [formControl]);
    if (!(0, react_1.isValidElement)(only)) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(provider_1.ImmutableFieldProvider, Object.assign({ targetId: targetId, targetSelector: targetSelector, field: field, type: type, autoBinding: autoBinding }, { children: (0, react_1.cloneElement)(only, Object.assign(Object.assign(Object.assign({}, forwardedProps), only.props), { datum,
            metadata,
            change })) })));
};
exports.ImmutableDynamicField = ImmutableDynamicField;
//# sourceMappingURL=index.js.map