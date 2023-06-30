import { FC } from "react";
import { DatumType, FormControlBasicMetadata, FormControlData, FormController } from "rx-store-form-plugin/main/interfaces";
import { Any, NormalDynamicFieldProps, ProviderProp } from "../../interfaces";
export declare const createNormalField: <F extends FormControlData, M extends Partial<Record<F[N]["field"], FormControlBasicMetadata>>, S extends string = string, N extends number = number, P extends Any = {}>(formControl: FormController<F, M, S>, field: F[N]["field"], type?: DatumType) => FC<ProviderProp<P>>;
export declare const NormalDynamicField: FC<NormalDynamicFieldProps>;
