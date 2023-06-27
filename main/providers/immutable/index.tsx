import { ImmutableFieldProvider } from "./provider";
import {
  DatumType,
  FormControlBasicMetadata,
  FormControlData,
  ImmutableFormController,
} from "rx-store-form-plugin/main/interfaces";
import { Any, ProviderProp } from "../../interfaces";
import { Children, FC, cloneElement, isValidElement } from "react";
import {
  createUseImmutableFormDatum,
  createUseImmutableFormMetaDatum,
} from "../../hooks";

export const createImmutableField = <
  F extends FormControlData,
  M extends Partial<Record<F[N]["field"], FormControlBasicMetadata>>,
  S extends string = string,
  N extends number = number,
  P extends Any = {}
>(
  formControl: ImmutableFormController<F, M, S>,
  field: F[N]["field"],
  type?: DatumType
): FC<ProviderProp<P>> => {
  const useFormDatum = createUseImmutableFormDatum(formControl);
  const useFormMetadata = createUseImmutableFormMetaDatum(formControl);
  return ({
    children,
    autoBinding,
    targetId,
    targetSelector,
    forwardedProps,
  }) => {
    const datum = useFormDatum<N>(field);
    const metadata = useFormMetadata<N>(field);
    const only = Children.only(children);
    if (!isValidElement(only)) {
      return null;
    }
    return (
      <ImmutableFieldProvider
        targetId={targetId}
        targetSelector={targetSelector}
        field={field}
        type={type}
        autoBinding={autoBinding}
      >
        {cloneElement(only, {
          ...forwardedProps,
          ...only.props,
          datum,
          metadata,
        })}
      </ImmutableFieldProvider>
    );
  };
};
