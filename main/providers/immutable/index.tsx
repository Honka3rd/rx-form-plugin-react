import { ImmutableFieldProvider } from "./provider";
import {
  DatumType,
  FormControlBasicMetadata,
  FormControlData,
  ImmutableFormController,
} from "rx-store-form-plugin/main/interfaces";
import {
  Any,
  ImmutableDynamicFieldProps,
  ProviderProp,
} from "../../interfaces";
import {
  Children,
  FC,
  cloneElement,
  isValidElement,
  useCallback,
  useMemo,
} from "react";
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
  const change = (value: F[N]["value"]) => {
    formControl.changeFormValue(field, value);
  };
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
          change,
        })}
      </ImmutableFieldProvider>
    );
  };
};

export const ImmutableDynamicField: FC<ImmutableDynamicFieldProps> = ({
  formControl,
  field,
  type,
  children,
  autoBinding,
  targetId,
  targetSelector,
  forwardedProps,
}) => {
  const useFormDatum = useMemo(
    () => createUseImmutableFormDatum(formControl),
    []
  );
  const useFormMetadata = useMemo(
    () => createUseImmutableFormMetaDatum(formControl),
    []
  );
  const datum = useFormDatum(field);
  const metadata = useFormMetadata(field);
  const only = Children.only(children);
  const change = useCallback(
    (value: any) => {
      formControl.changeFormValue(field, value);
    },
    [formControl]
  );
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
        change,
      })}
    </ImmutableFieldProvider>
  );
};
