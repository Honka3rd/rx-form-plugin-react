import {
  FormControlBasicMetadata,
  FormControlData,
  FormController,
  ImmutableFormController
} from "rx-store-form-plugin/main/interfaces";
import { useEffect, useState } from "react";
import { Comparator } from "../interfaces";
export const createUseFormData = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string,
>(
  formControl: FormController<F, M, S>,
  comparator?: Comparator<F[number][]>
) => {
  const { observeFormData, getFormData } = formControl;
  return <N extends number[] = number[]>(fields?: F[N[number]]["field"][]) => {
    const [formData, set] = useState(getFormData(fields));
    useEffect(() => observeFormData(set, fields, comparator), []);
    return formData;
  };
};

export const createUseImmutableFormData = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string,
>(
  formControl: ImmutableFormController<F, M, S>
) => {
  const { observeFormData, getFormData } = formControl;
  return <N extends number[] = number[]>(fields?: F[N[number]]["field"][]) => {
    const [formData, set] = useState(getFormData(fields));
    useEffect(() => observeFormData(set, fields), []);
    return formData;
  };
};
