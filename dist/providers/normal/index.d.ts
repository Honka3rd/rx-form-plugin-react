import { DatumType, FormControlData } from "rx-store-form-plugin/main/interfaces";
import { ProviderProp } from "../../interfaces";
import { FC } from "react";
export declare const createNormalField: <F extends FormControlData, N extends number = number>(field: F[N]["field"], type?: DatumType) => FC<ProviderProp>;
