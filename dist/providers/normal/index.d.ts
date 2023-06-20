import { DatumType, FormControlBasicMetadata, FormControlData, FormController } from "rx-store-form-plugin/main/interfaces";
import { ProviderProp } from "../../interfaces";
import { FC } from "react";
export declare const createNormalField: <F extends FormControlData, M extends Partial<Record<F[N]["field"], FormControlBasicMetadata>>, S extends string = string, N extends number = number>(formControl: FormController<F, M, S>, field: F[N]["field"], type?: DatumType) => FC<ProviderProp>;
