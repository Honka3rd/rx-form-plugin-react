import {
  Children,
  FC,
  cloneElement,
  isValidElement,
  useCallback,
  useMemo,
} from "react";
import {
  DatumType,
  FormControlBasicMetadata,
  FormControlData,
  ImmutableFormController,
} from "rx-store-form-plugin/main/interfaces";
import {
  createUseImmutableFormDatum,
  createUseImmutableFormMetaDatum,
} from "../../hooks";
import {
  Any,
  ImmutableDynamicFieldProps,
  InjectedImmutableProps,
  ProviderProp,
} from "../../interfaces";
import { ImmutableFieldProvider } from "./provider";

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

  const focus = () => {
    formControl.focusFormField(field, true);
  };

  const mouseover = () => {
    formControl.hoverFormField(field, true);
  };

  const mouseleave = () => {
    formControl.hoverFormField(field, false);
  };

  const blur = () => {
    formControl.focusFormField(field, false).touchFormField(field, true);
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

    const injected: InjectedImmutableProps<F, N> = useMemo(() => {
      if (autoBinding) {
        return {
          datum,
          metadata,
        };
      }
      return {
        datum,
        metadata,
        change,
        focus,
        mouseover,
        mouseleave,
        blur,
      };
    }, [autoBinding]);

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
          ...injected,
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

  const focus = useCallback(() => {
    formControl.focusFormField(field, true);
  }, [formControl]);

  const mouseover = useCallback(() => {
    formControl.hoverFormField(field, true);
  }, [formControl]);

  const mouseleave = useCallback(() => {
    formControl.hoverFormField(field, false);
  }, [formControl]);

  const blur = useCallback(() => {
    formControl.focusFormField(field, false).touchFormField(field, true);
  }, [formControl]);

  const injected: InjectedImmutableProps<FormControlData, number> =
    useMemo(() => {
      if (autoBinding) {
        return {
          datum,
          metadata,
        };
      }
      return {
        datum,
        metadata,
        change,
        focus,
        mouseover,
        mouseleave,
        blur,
      };
    }, [autoBinding]);

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
        ...injected,
      })}
    </ImmutableFieldProvider>
  );
};
