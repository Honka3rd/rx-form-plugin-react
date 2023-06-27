import { DatumType, FormControlBasicMetadata, FormControlData, ImmutableFormController } from "rx-store-form-plugin/main/interfaces";
import { Any, ProviderProp } from "../../interfaces";
import { FC } from "react";
export declare const createImmutableField: <F extends FormControlData, M extends Partial<Record<F[N]["field"], FormControlBasicMetadata>>, S extends string = string, N extends number = number, P extends Any = {}>(formControl: ImmutableFormController<F, M, S>, field: F[N]["field"], type?: DatumType) => FC<ProviderProp<P>>;
