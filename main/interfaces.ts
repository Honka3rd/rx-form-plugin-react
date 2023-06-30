import { HTMLAttributes, ReactNode } from "react";
import {
  DatumType,
  FormControlBasicMetadata,
  FormControlData,
  FormController,
  ImmutableFormController,
  ImmutableMetaDatum,
  PV,
  ToFormData,
} from "rx-store-form-plugin/main/interfaces";

export type Any = { [k: string]: any };

export type ProviderProp<P extends Any = {}> = {
  children: ReactNode;
  autoBinding?: boolean;
  targetId?: string;
  targetSelector?: string;
  forwardedProps?: P;
};

export type FormProviderProps = HTMLAttributes<HTMLElement> & {
  formProps?: HTMLAttributes<HTMLFormElement>;
  formLocator?: string;
  submitHandler?: <T>(e: T, toFormData: ToFormData) => void;
  resetHandler?: <T>(e: T) => void;
};

type InjectedHandlers<
F extends FormControlData,
N extends number = number
> = Partial<{
  change: (value: F[N]["value"]) => void;
  mouseover: () => void;
  mouseleave: () => void;
  focus: () => void;
  blur: () => void;
}>

export interface InjectedProps<
  F extends FormControlData,
  M extends Partial<Record<F[N]["field"], FormControlBasicMetadata>>,
  N extends number = number
> extends InjectedHandlers<F, N> {
  datum: F[N];
  metadata: Partial<M>[F[N]["field"]];
};

export interface InjectedImmutableProps<
  F extends FormControlData,
  N extends number = number
> extends InjectedHandlers<F, N> {
  datum: Immutable.Map<keyof F[N], PV<F[N]>>;
  metadata: ImmutableMetaDatum;
};

export type Comparator<T> = (var1: T, var2: T) => boolean;

export type NormalComparatorsConfig<
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>
> = Partial<{
  formDataCompare: Comparator<F[number][]>;
  formFieldCompare: Comparator<F[number]>;
  formValueCompare: Comparator<F[number]["value"]>;
  formPartialCompare: Comparator<Partial<M>>;
}>;

type DynamicFieldProps = {
  field: string;
  type?: DatumType;
} & ProviderProp;

export interface NormalDynamicFieldProps extends DynamicFieldProps {
  formControl: FormController<
    FormControlData,
    Partial<Record<string, FormControlBasicMetadata>>,
    string
  >;
}

export interface ImmutableDynamicFieldProps extends DynamicFieldProps {
  formControl: ImmutableFormController<
    FormControlData,
    Partial<Record<string, FormControlBasicMetadata>>,
    string
  >;
}
