"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlledImmutableFormProvider = exports.controlledFormProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const provider_1 = require("./provider");
const react_1 = require("react");
const controlledFormProvider = (formControl) => (props) => {
    const formRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const { current } = formRef;
        if (!current) {
            return;
        }
        current.setFormController(formControl);
    }, []);
    return (0, jsx_runtime_1.jsx)(provider_1.FormProvider, Object.assign({}, props, { ref: formRef }));
};
exports.controlledFormProvider = controlledFormProvider;
const controlledImmutableFormProvider = (formControl) => (props) => {
    const formRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const { current } = formRef;
        if (!current) {
            return;
        }
        current.setFormController(formControl);
    }, []);
    return (0, jsx_runtime_1.jsx)(provider_1.FormProvider, Object.assign({}, props, { ref: formRef }));
};
exports.controlledImmutableFormProvider = controlledImmutableFormProvider;
//# sourceMappingURL=form.js.map