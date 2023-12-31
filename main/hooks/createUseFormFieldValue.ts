import {
  FormControlBasicMetadata,
  FormControlData,
  FormController,
  ImmutableFormController
} from "rx-store-form-plugin/main/interfaces";
import { useEffect, useState } from "react";
import { Comparator } from "../interfaces";
export const createUseFormFieldValue = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string
>(
  formControl: FormController<F, M, S>,
  comparator?: Comparator<F[number]["value"]>
) => {
  const { observeFormValue, getDatumValue } = formControl;
  return <N extends number = number>(field: F[N]["field"]) => {
    const [value, set] = useState(getDatumValue(field));
    useEffect(() => observeFormValue<N>(field, set, comparator), []);
    return value;
  };
};

export const createUseImmutableFormFieldValue = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string
>(
  formControl: ImmutableFormController<F, M, S>
) => {
  const { observeFormValue, getDatumValue } = formControl;
  return <N extends number = number>(field: F[N]["field"]) => {
    const [value, set] = useState(getDatumValue(field));
    useEffect(() => observeFormValue<N>(field, set), []);
    return value;
  };
};
