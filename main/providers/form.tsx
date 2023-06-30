import { FormProvider } from "./provider";
import { FormProviderProps } from "../interfaces";
import { FC, useEffect, useRef } from "react";
import { FormControlComponent } from "rx-store-form-plugin";
import {
  FormControlBasicMetadata,
  FormControlData,
  FormController,
  ImmutableFormController,
} from "rx-store-form-plugin/main/interfaces";
import { useClassName } from "./shared";

export const controlledFormProvider =
  <
    F extends FormControlData,
    M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
    S extends string = string
  >(
    formControl: FormController<F, M, S>
  ): FC<FormProviderProps> =>
  ({ className, ...props }) => {
    const formRef = useRef<FormControlComponent<F, M, S>>(null);
    useEffect(() => {
      const { current } = formRef;
      if (!current) {
        return;
      }

      current.setFormController(formControl);
    }, []);

    useClassName(formRef, className);

    return <FormProvider {...props} ref={formRef} />;
  };

export const controlledImmutableFormProvider =
  <
    F extends FormControlData,
    M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
    S extends string = string
  >(
    formControl: ImmutableFormController<F, M, S>
  ): FC<FormProviderProps> =>
  ({ className, ...props }) => {
    const formRef = useRef<FormControlComponent<F, M, S>>(null);
    useEffect(() => {
      const { current } = formRef;
      if (!current) {
        return;
      }

      current.setFormController(formControl);
    }, []);

    useClassName(formRef, className);

    return <FormProvider {...props} ref={formRef} />;
  };
