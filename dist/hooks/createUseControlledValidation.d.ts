import { FormControlBasicMetadata } from "rx-store-form-plugin/dist/main/interfaces";
import { FormControlData, FormController, ImmutableFormController } from "rx-store-form-plugin/main/interfaces";
export declare const createUseControlledValidation: <F extends FormControlData, M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>, S extends string>(formControl: FormController<F, M, S> | ImmutableFormController<F, M, S>) => (deps?: any) => void;
