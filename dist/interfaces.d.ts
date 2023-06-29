import { HTMLAttributes, ReactNode } from "react";
import { DatumType, FormControlBasicMetadata, FormControlData, FormController, ImmutableFormController, ImmutableMetaDatum, PV } from "rx-store-form-plugin/main/interfaces";
export type Any = {
    [k: string]: any;
};
export type ProviderProp<P extends Any = {}> = {
    children: ReactNode;
    autoBinding?: boolean;
    targetId?: string;
    targetSelector?: string;
    forwardedProps?: P;
};
export type FormProviderProps = HTMLAttributes<HTMLElement> & {
    formProps?: HTMLAttributes<HTMLFormElement>;
};
export type InjectedProps<F extends FormControlData, M extends Partial<Record<F[N]["field"], FormControlBasicMetadata>>, N extends number = number> = {
    datum: F[N];
    metadata: Partial<M>[F[N]["field"]];
    change: (value: F[N]["value"]) => void;
};
export type InjectedImmutableProps<F extends FormControlData, N extends number = number> = {
    datum: Immutable.Map<keyof F[N], PV<F[N]>>;
    metadata: ImmutableMetaDatum;
    change: (value: Immutable.Map<keyof F[N], PV<F[N]>>) => void;
};
export type Comparator<T> = (var1: T, var2: T) => boolean;
export type NormalComparatorsConfig<F extends FormControlData, M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>> = Partial<{
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
    formControl: FormController<FormControlData, Partial<Record<string, FormControlBasicMetadata>>, string>;
}
export interface ImmutableDynamicFieldProps extends DynamicFieldProps {
    formControl: ImmutableFormController<FormControlData, Partial<Record<string, FormControlBasicMetadata>>, string>;
}
export {};
