"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNormalField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const provider_1 = require("./provider");
const hooks_1 = require("../../hooks");
const createNormalField = (formControl, field, type) => {
    const useFormDatum = (0, hooks_1.createUseFormDatum)(formControl);
    const useFormMetadata = (0, hooks_1.createUseFormMetaDatum)(formControl);
    return ({ children, placeholder, defaultValue }) => {
        const datum = useFormDatum(field);
        const metadata = useFormMetadata(field);
        const only = react_1.Children.only(children);
        if (!(0, react_1.isValidElement)(only)) {
            return null;
        }
        return ((0, jsx_runtime_1.jsx)(provider_1.NormalFieldProvider, Object.assign({ placeholder: placeholder, defaultValue: defaultValue, field: field, type: type }, { children: (0, react_1.cloneElement)(only, Object.assign(Object.assign({}, only.props), { datum,
                metadata })) })));
    };
};
exports.createNormalField = createNormalField;
