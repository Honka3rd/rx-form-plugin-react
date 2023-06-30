"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImmutableDynamicField = exports.createImmutableField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const hooks_1 = require("../../hooks");
const provider_1 = require("./provider");
const createImmutableField = (formControl, field, type) => {
    const useFormDatum = (0, hooks_1.createUseImmutableFormDatum)(formControl);
    const useFormMetadata = (0, hooks_1.createUseImmutableFormMetaDatum)(formControl);
    const change = (value) => {
        formControl.changeFormValue(field, value);
    };
    const focus = () => {
        formControl.focusFormField(field, true);
    };
    const mouseover = () => {
        formControl.hoverFormField(field, true);
    };
    const mouseleave = () => {
        formControl.hoverFormField(field, false);
    };
    const blur = () => {
        formControl.focusFormField(field, false).touchFormField(field, true);
    };
    return ({ children, autoBinding, targetId, targetSelector, forwardedProps, }) => {
        const datum = useFormDatum(field);
        const metadata = useFormMetadata(field);
        const only = react_1.Children.only(children);
        const injected = (0, react_1.useMemo)(() => {
            if (autoBinding) {
                return {
                    datum,
                    metadata,
                };
            }
            return {
                datum,
                metadata,
                change,
                focus,
                mouseover,
                mouseleave,
                blur,
            };
        }, [autoBinding]);
        if (!(0, react_1.isValidElement)(only)) {
            return null;
        }
        return ((0, jsx_runtime_1.jsx)(provider_1.ImmutableFieldProvider, Object.assign({ targetId: targetId, targetSelector: targetSelector, field: field, type: type, autoBinding: autoBinding }, { children: (0, react_1.cloneElement)(only, Object.assign(Object.assign(Object.assign({}, forwardedProps), only.props), injected)) })));
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
    const focus = (0, react_1.useCallback)(() => {
        formControl.focusFormField(field, true);
    }, [formControl]);
    const mouseover = (0, react_1.useCallback)(() => {
        formControl.hoverFormField(field, true);
    }, [formControl]);
    const mouseleave = (0, react_1.useCallback)(() => {
        formControl.hoverFormField(field, false);
    }, [formControl]);
    const blur = (0, react_1.useCallback)(() => {
        formControl.focusFormField(field, false).touchFormField(field, true);
    }, [formControl]);
    const injected = (0, react_1.useMemo)(() => {
        if (autoBinding) {
            return {
                datum,
                metadata,
            };
        }
        return {
            datum,
            metadata,
            change,
            focus,
            mouseover,
            mouseleave,
            blur,
        };
    }, [autoBinding]);
    if (!(0, react_1.isValidElement)(only)) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(provider_1.ImmutableFieldProvider, Object.assign({ targetId: targetId, targetSelector: targetSelector, field: field, type: type, autoBinding: autoBinding }, { children: (0, react_1.cloneElement)(only, Object.assign(Object.assign(Object.assign({}, forwardedProps), only.props), injected)) })));
};
exports.ImmutableDynamicField = ImmutableDynamicField;
//# sourceMappingURL=index.js.map