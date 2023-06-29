import {
  cloneElement,
  Children,
  isValidElement,
  useMemo,
  useCallback,
} from "react";
import { NormalFieldProvider } from "./provider";
import {
  DatumType,
  FormControlBasicMetadata,
  FormControlData,
  FormController,
} from "rx-store-form-plugin/main/interfaces";
import { Any, NormalDynamicFieldProps, ProviderProp } from "../../interfaces";
import { FC } from "react";
import { createUseFormDatum, createUseFormMetaDatum } from "../../hooks";

export const createNormalField = <
  F extends FormControlData,
  M extends Partial<Record<F[N]["field"], FormControlBasicMetadata>>,
  S extends string = string,
  N extends number = number,
  P extends Any = {}
>(
  formControl: FormController<F, M, S>,
  field: F[N]["field"],
  type?: DatumType
): FC<ProviderProp<P>> => {
  const useFormDatum = createUseFormDatum(formControl);
  const useFormMetadata = createUseFormMetaDatum(formControl);
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
      <NormalFieldProvider
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
      </NormalFieldProvider>
    );
  };
};

export const NormalDynamicField: FC<NormalDynamicFieldProps> = ({
  formControl,
  field,
  type,
  children,
  autoBinding,
  targetId,
  targetSelector,
  forwardedProps,
}) => {
  const useFormDatum = useMemo(() => createUseFormDatum(formControl), []);
  const useFormMetadata = useMemo(
    () => createUseFormMetaDatum(formControl),
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
    <NormalFieldProvider
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
    </NormalFieldProvider>
  );
};
