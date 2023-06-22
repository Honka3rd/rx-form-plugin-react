"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useImmutableBinding = exports.useNormalBinding = void 0;
const react_1 = require("react");
const rx_store_form_plugin_1 = require("rx-store-form-plugin");
const useNormalBinding = (autoBinding) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const { current } = ref;
        if (autoBinding) {
            return;
        }
        if (current instanceof rx_store_form_plugin_1.NRFieldComponent) {
            current.setAttrBinder(() => { });
        }
    }, [autoBinding]);
    return ref;
};
exports.useNormalBinding = useNormalBinding;
const useImmutableBinding = (autoBinding) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const { current } = ref;
        if (autoBinding) {
            return;
        }
        if (current instanceof rx_store_form_plugin_1.IRFieldComponent) {
            current.setAttrBinder(() => { });
        }
    }, [autoBinding]);
    return ref;
};
exports.useImmutableBinding = useImmutableBinding;
//# sourceMappingURL=shared.js.map