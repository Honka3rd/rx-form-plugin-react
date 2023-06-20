import { ImmutableFieldProvider } from "./provider";
import {
  DatumType,
  FormControlBasicMetadata,
  FormControlData,
  FormController,
} from "rx-store-form-plugin/main/interfaces";
import { ProviderProp } from "../../interfaces";
import { Children, FC, cloneElement, isValidElement } from "react";
import { createUseFormDatum, createUseFormMetaDatum } from "../../hooks";

export const createImmutableField = <
  F extends FormControlData,
  M extends Partial<Record<F[N]["field"], FormControlBasicMetadata>>,
  S extends string = string,
  N extends number = number
>(
  formControl: FormController<F, M, S>,
  field: F[N]["field"],
  type?: DatumType
): FC<ProviderProp> => {
  const useFormDatum = createUseFormDatum(formControl);
  const useFormMetadata = createUseFormMetaDatum(formControl);
  return ({ children, placeholder, defaultValue }) => {
    const datum = useFormDatum<N>(field);
    const metadata = useFormMetadata<N>(field);
    const only = Children.only(children);
    if (!isValidElement(only)) {
      return null;
    }
    return (
      <ImmutableFieldProvider
        placeholder={placeholder}
        defaultValue={defaultValue}
        field={field}
        type={type}
      >
        {cloneElement(only, {
          ...only.props,
          datum,
          metadata,
        })}
      </ImmutableFieldProvider>
    );
  };
};
