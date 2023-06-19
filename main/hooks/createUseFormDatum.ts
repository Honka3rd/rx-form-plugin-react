import {
  FormControlBasicMetadata,
  FormControlData,
  FormController,
  ImmutableFormController,
} from "rx-store-form-plugin/main/interfaces";
import { useEffect, useState } from "react";
export const createUseFormDatum = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string
>(
  formControl: FormController<F, M, S>
) => {
  const { observeFormDatum, getDatum } = formControl;
  return <N extends number = number>(field: F[N]["field"]) => {
    const [datum, set] = useState(getDatum(field)!);
    useEffect(() => observeFormDatum(field, set), []);
    return datum;
  };
};

export const createUseImmutableFormDatum = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string
>(
  formControl: ImmutableFormController<F, M, S>
) => {
  const { observeFormDatum, getDatum } = formControl;
  return <N extends number = number>(field: F[N]["field"]) => {
    const [datum, set] = useState(getDatum(field)!);
    useEffect(() => observeFormDatum(field, set), []);
    return datum;
  };
};
