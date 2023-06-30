import { RefObject } from "react";
import { FormControlComponent } from "rx-store-form-plugin";
import { FormControlBasicMetadata, FormControlData } from "rx-store-form-plugin/main/interfaces";
export declare const useClassName: <F extends FormControlData, M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>, S extends string = string>(ref: RefObject<FormControlComponent<F, M, S>>, className?: string) => void;
