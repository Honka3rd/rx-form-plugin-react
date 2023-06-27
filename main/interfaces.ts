import { HTMLAttributes, ReactNode } from "react";
import {
  FormControlBasicMetadata,
  FormControlData,
} from "rx-store-form-plugin/main/interfaces";

export type Any = { [k: string]: any }

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

export type InjectedProps<
  F extends FormControlData,
  M extends Partial<Record<F[N]["field"], FormControlBasicMetadata>>,
  N extends number = number
> = {
  datum: F[N];
  metadata: Partial<M>[F[N]["field"]];
  onChange?: (event: unknown) => void;
};

export type Comparator<T> = (var1: T, var2: T) => boolean;

export type NormalComparatorsConfig<F extends FormControlData> = Partial<{
  formDataCompare: Comparator<F[number][]>;
  formFieldCompare: Comparator<F[number]>;
  formValueCompare: Comparator<F[number]["value"]>;
}>;
