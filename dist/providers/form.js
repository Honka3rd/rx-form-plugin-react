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
exports.controlledImmutableFormProvider = exports.controlledFormProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const provider_1 = require("./provider");
const shared_1 = require("./shared");
const controlledFormProvider = (formControl) => (_a) => {
    var { className, submitHandler, resetHandler } = _a, props = __rest(_a, ["className", "submitHandler", "resetHandler"]);
    const formRef = (0, react_1.useRef)(null);
    const handlers = (0, react_1.useRef)({ submitHandler, resetHandler });
    (0, react_1.useEffect)(() => {
        const { current } = formRef;
        if (!current) {
            return;
        }
        const { submitHandler, resetHandler } = handlers.current;
        submitHandler && current.setOnSubmit(submitHandler);
        resetHandler && current.setOnReset(resetHandler);
        current.setFormController(formControl);
    }, []);
    (0, shared_1.useClassName)(formRef, className);
    return (0, jsx_runtime_1.jsx)(provider_1.FormProvider, Object.assign({}, props, { ref: formRef }));
};
exports.controlledFormProvider = controlledFormProvider;
const controlledImmutableFormProvider = (formControl) => (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    const formRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const { current } = formRef;
        if (!current) {
            return;
        }
        current.setFormController(formControl);
    }, []);
    (0, shared_1.useClassName)(formRef, className);
    return (0, jsx_runtime_1.jsx)(provider_1.FormProvider, Object.assign({}, props, { ref: formRef }));
};
exports.controlledImmutableFormProvider = controlledImmutableFormProvider;
//# sourceMappingURL=form.js.map