import { RefObject } from "react";
import { FormControlComponent, IRFieldComponent, NRFieldComponent } from "rx-store-form-plugin";
import { FormControlBasicMetadata, FormControlData } from "rx-store-form-plugin/main/interfaces";
export declare const useNormalBinding: <F extends FormControlData, M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>, S extends string = string, N extends number = number>(autoBinding?: boolean) => RefObject<NRFieldComponent<F, M, S, N>>;
export declare const useImmutableBinding: <F extends FormControlData, M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>, S extends string = string, N extends number = number>(autoBinding?: boolean) => RefObject<IRFieldComponent<F, M, S, N>>;
export declare const useClassName: <F extends FormControlData, M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>, S extends string = string>(ref: RefObject<FormControlComponent<F, M, S>>, className?: string) => void;
