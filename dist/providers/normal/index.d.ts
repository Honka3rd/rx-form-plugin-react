import { FormControlData } from "rx-store-form-plugin/main/interfaces";
import { ProviderProps } from "../../interfaces";
import { FC } from "react";
export declare const createNormalField: <F extends FormControlData, N extends number = number>() => FC<ProviderProps<F, N>>;
