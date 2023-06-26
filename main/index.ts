import { installNRFComponents } from "rx-store-form-plugin";
import {
  createUseFormData,
  createUseFormDatum,
  createUseFormFieldValue,
  createUseFormMetadata,
  createUseFormMetaDatum,
  createUseImmutableFormData,
  createUseImmutableFormDatum,
  createUseImmutableFormFieldValue,
  createUseImmutableFormMetadata,
  createUseImmutableFormMetaDatum,
} from "./hooks";

import {
  FormControlBasicMetadata,
  FormControlData,
  FormController,
  ImmutableFormController,
} from "rx-store-form-plugin/main/interfaces";
import { NormalComparatorsConfig } from "./interfaces";
import {
  controlledFormProvider,
  controlledImmutableFormProvider,
  createImmutableField,
  createNormalField,
} from "./providers";

try {
  installNRFComponents();
} catch (error) {
  console.error("Browser not support Web Component", error);
}

export const formStateManager = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string
>(
  formControl: FormController<F, M, S>, config: NormalComparatorsConfig<F>
) => ({
  useFormData: createUseFormData(formControl, config?.formDataCompare),
  useFormDatum: createUseFormDatum(formControl, config.formFieldCompare),
  useFormFieldValue: createUseFormFieldValue(formControl, config.formValueCompare),
  useFormMetadata: createUseFormMetadata(formControl),
  useFormMetaDatum: createUseFormMetaDatum(formControl),
});

export const formImmutableStateManager = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string
>(
  formControl: ImmutableFormController<F, M, S>
) => ({
  useFormData: createUseImmutableFormData(formControl),
  useFormDatum: createUseImmutableFormDatum(formControl),
  useFormFieldValue: createUseImmutableFormFieldValue(formControl),
  useFormMetadata: createUseImmutableFormMetadata(formControl),
  useFormMetaDatum: createUseImmutableFormMetaDatum(formControl),
});

export {
  controlledFormProvider,
  controlledImmutableFormProvider, createImmutableField, createNormalField
};

