import { FormProviderProps } from "../interfaces";
import { FC } from "react";
import { FormControlBasicMetadata, FormControlData, FormController, ImmutableFormController } from "rx-store-form-plugin/main/interfaces";
export declare const controlledFormProvider: <F extends FormControlData, M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>, S extends string = string>(formControl: FormController<F, M, S>) => FC<FormProviderProps>;
export declare const controlledImmutableFormProvider: <F extends FormControlData, M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>, S extends string = string>(formControl: ImmutableFormController<F, M, S>) => FC<FormProviderProps>;
