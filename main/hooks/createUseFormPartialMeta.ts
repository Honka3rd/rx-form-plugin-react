import {
  FormControlBasicMetadata,
  FormControlData,
  FormController,
  ImmutableFormController,
} from "rx-store-form-plugin/main/interfaces";
import { useEffect, useRef, useState } from "react";
import { Comparator } from "../interfaces";
export const createUseFormPartialMeta = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string,
  NS extends F[number]["field"][] = F[number]["field"][]
>(
  formControl: FormController<F, M, S>,
  comparator?: Comparator<Partial<M>>
) => {
  const { observeMetaByFields, getFieldsMeta } = formControl;
  return (fields: NS) => {
    const [metadata, set] = useState(getFieldsMeta<NS>(fields));
    const fieldsRef = useRef(fields);
    useEffect(
      () => observeMetaByFields<NS>(fieldsRef.current, set, comparator),
      []
    );
    return metadata;
  };
};

export const createUseImmutableFormPartialMeta = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string
>(
  formControl: ImmutableFormController<F, M, S>
) => {
  const { observeMetaByFields, getFieldsMeta } = formControl;
  return (fields: F[number]["field"][]) => {
    const [metadata, set] = useState(getFieldsMeta(fields));
    const fieldsRef = useRef(fields);
    useEffect(() => observeMetaByFields(fieldsRef.current, set), []);
    return metadata;
  };
};
