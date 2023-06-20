import { ImmutableFieldProvider } from "./provider";
import {
  DatumType,
  FormControlData,
} from "rx-store-form-plugin/main/interfaces";
import { ProviderProp } from "../../interfaces";
import { FC } from "react";

export const createImmutableField =
  <F extends FormControlData, N extends number = number>(
    field: F[N]["field"],
    type?: DatumType
  ): FC<ProviderProp> =>
  (props) => {
    return <ImmutableFieldProvider {...props} field={field} type={type} />;
  };
