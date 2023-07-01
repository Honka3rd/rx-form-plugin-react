"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseControlledValidation = void 0;
const react_1 = require("react");
const createUseControlledValidation = (formControl) => {
    return (deps) => {
        (0, react_1.useEffect)(() => formControl.startValidation(), [deps]);
    };
};
exports.createUseControlledValidation = createUseControlledValidation;
//# sourceMappingURL=createUseControlledValidation.js.map