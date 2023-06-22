import { HTMLAttributes, ReactNode } from "react";
import {
  FormControlBasicMetadata,
  FormControlData,
} from "rx-store-form-plugin/main/interfaces";

export type ProviderProp = {
  children: ReactNode;
  autoBinding?: boolean;
  targetId?: string;
  targetSelector?: string;
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
  metadata: Partial<M>[F[N]["field"]]
};
