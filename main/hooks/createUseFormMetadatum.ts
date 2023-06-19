import FormControllerImpl from "rx-store-form-plugin/main/formControlNRS";
import { ImmutableFormControllerImpl } from "rx-store-form-plugin/main/formControlIRS";
import {
  FormControlBasicMetadata,
  FormControlData,
  FormController,
  ImmutableFormController,
} from "rx-store-form-plugin/main/interfaces";
import { useEffect, useState } from "react";
export const createUseFormMetaDatum = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string
>(
  formControl: FormController<F, M, S>
) => {
  const { observeMetaByField, getFieldMeta } = formControl;
  return <N extends number = number>(field: F[N]["field"]) => {
    const [metaDatum, set] = useState(getFieldMeta(field));
    useEffect(() => observeMetaByField(field, set), []);
    return metaDatum;
  };
};

export const createUseImmutableFormMetaDatum = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string
>(
  formControl: ImmutableFormController<F, M, S>
) => {
  const { observeMetaByField, getFieldMeta } = formControl;
  return <N extends number = number>(field: F[N]["field"]) => {
    const [metaDatum, set] = useState(getFieldMeta(field));
    useEffect(() => observeMetaByField(field, set), []);
    return metaDatum;
  };
};
