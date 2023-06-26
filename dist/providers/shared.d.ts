/// <reference types="react" />
import { IRFieldComponent, NRFieldComponent } from "rx-store-form-plugin";
import { FormControlBasicMetadata, FormControlData } from "rx-store-form-plugin/main/interfaces";
export declare const useNormalBinding: <F extends FormControlData, M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>, S extends string = string, N extends number = number>(autoBinding?: boolean) => import("react").RefObject<NRFieldComponent<F, M, S, N>>;
export declare const useImmutableBinding: <F extends FormControlData, M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>, S extends string = string, N extends number = number>(autoBinding?: boolean) => import("react").RefObject<IRFieldComponent<F, M, S, N>>;
