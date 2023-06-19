import {
  FormControlBasicMetadata,
  FormControlData,
  FormController,
  ImmutableFormController,
} from "rx-store-form-plugin/main/interfaces";
import { useEffect, useState } from "react";
export const createUseFormMetadata = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string,
>(
  formControl: FormController<F, M, S>
) => {
  const { observeMeta, getMeta } = formControl;
  return () => {
    const [metadata, set] = useState(getMeta());
    useEffect(() => observeMeta(set), []);
    return metadata;
  };
};

export const createUseImmutableFormMetadata = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string,
>(
  formControl: ImmutableFormController<F, M, S>
) => {
  const { observeMeta, getMeta } = formControl;
  return () => {
    const [metadata, set] = useState(getMeta());
    useEffect(() => observeMeta(set), []);
    return metadata;
  };
};