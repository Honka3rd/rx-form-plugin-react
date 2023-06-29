"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImmutableDynamicField = exports.NormalDynamicField = exports.createNormalField = exports.createImmutableField = exports.controlledImmutableFormProvider = exports.controlledFormProvider = exports.formImmutableStateManager = exports.formStateManager = void 0;
const rx_store_form_plugin_1 = require("rx-store-form-plugin");
const hooks_1 = require("./hooks");
const providers_1 = require("./providers");
Object.defineProperty(exports, "controlledFormProvider", { enumerable: true, get: function () { return providers_1.controlledFormProvider; } });
Object.defineProperty(exports, "controlledImmutableFormProvider", { enumerable: true, get: function () { return providers_1.controlledImmutableFormProvider; } });
Object.defineProperty(exports, "createImmutableField", { enumerable: true, get: function () { return providers_1.createImmutableField; } });
Object.defineProperty(exports, "createNormalField", { enumerable: true, get: function () { return providers_1.createNormalField; } });
const normal_1 = require("./providers/normal");
Object.defineProperty(exports, "NormalDynamicField", { enumerable: true, get: function () { return normal_1.NormalDynamicField; } });
const immutable_1 = require("./providers/immutable");
Object.defineProperty(exports, "ImmutableDynamicField", { enumerable: true, get: function () { return immutable_1.ImmutableDynamicField; } });
const createUseFormPartialMeta_1 = require("./hooks/createUseFormPartialMeta");
try {
    (0, rx_store_form_plugin_1.installNRFComponents)();
}
catch (error) {
    console.error("Browser not support Web Component", error);
}
const formStateManager = (formControl, config = {}) => ({
    useFormData: (0, hooks_1.createUseFormData)(formControl, config.formDataCompare),
    useFormDatum: (0, hooks_1.createUseFormDatum)(formControl, config.formFieldCompare),
    useFormFieldValue: (0, hooks_1.createUseFormFieldValue)(formControl, config.formValueCompare),
    useFormMetadata: (0, hooks_1.createUseFormMetadata)(formControl),
    useFormPartialMeta: (0, createUseFormPartialMeta_1.createUseFormPartialMeta)(formControl, config.formPartialCompare),
    useFormMetaDatum: (0, hooks_1.createUseFormMetaDatum)(formControl),
});
exports.formStateManager = formStateManager;
const formImmutableStateManager = (formControl) => ({
    useFormData: (0, hooks_1.createUseImmutableFormData)(formControl),
    useFormDatum: (0, hooks_1.createUseImmutableFormDatum)(formControl),
    useFormFieldValue: (0, hooks_1.createUseImmutableFormFieldValue)(formControl),
    useFormMetadata: (0, hooks_1.createUseImmutableFormMetadata)(formControl),
    useFormPartialMeta: (0, createUseFormPartialMeta_1.createUseImmutableFormPartialMeta)(formControl),
    useFormMetaDatum: (0, hooks_1.createUseImmutableFormMetaDatum)(formControl),
});
exports.formImmutableStateManager = formImmutableStateManager;
//# sourceMappingURL=index.js.map