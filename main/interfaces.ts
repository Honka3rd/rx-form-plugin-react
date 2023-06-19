import { HTMLAttributes, ReactNode } from "react";
import {
  DatumType,
  FormControlData,
} from "rx-store-form-plugin/main/interfaces";

export type ProviderProps<
  F extends FormControlData,
  N extends number = number
> = {
  field: F[N]["field"];
  children: ReactNode;
  placeholder?: string;
  defaultValue?: string;
  type?: DatumType;
};

export type FormProviderProps = HTMLAttributes<HTMLElement> & {
  formProps: HTMLAttributes<HTMLFormElement>;
};
