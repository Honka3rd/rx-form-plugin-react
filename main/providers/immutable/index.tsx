import { ImmutableFieldProvider } from "./provider";
import { FormControlData } from "rx-store-form-plugin/main/interfaces";
import { ProviderProps } from "../../interfaces";
import { FC } from "react";

export const createImmutableField =
  <F extends FormControlData, N extends number = number>(): FC<
    ProviderProps<F, N>
  > =>
  (props) => {
    return <ImmutableFieldProvider {...props} />;
  };
