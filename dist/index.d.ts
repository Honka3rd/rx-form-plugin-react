import { controlledFormProvider, controlledImmutableFormProvider, createNormalField, createImmutableField } from "./providers";
import { FormControlBasicMetadata, FormControlData, FormController, ImmutableFormController } from "rx-store-form-plugin/main/interfaces";
export declare const formStateManager: <F extends FormControlData, M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>, S extends string>(formControl: FormController<F, M, S>) => {
    useFormData: <N extends number[] = number[]>(fields?: F[N[number]]["field"][] | undefined) => ReturnType<Record<S, () => F>[S]> | F[N[number]][];
    useFormDatum: <N_1 extends number = number>(field: F[N_1]["field"]) => F[N_1];
    useFormFieldValue: <N_2 extends number = number>(field: F[N_2]["field"]) => F[N_2]["value"] | undefined;
    useFormMetadata: () => Partial<M> | undefined;
    useFormMetaDatum: <N_3 extends number = number>(field: F[N_3]["field"]) => Partial<M>[F[number]["field"]];
};
export declare const formImmutableStateManager: <F extends FormControlData, M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>, S extends string>(formControl: ImmutableFormController<F, M, S>) => {
    useFormData: <N extends number[] = number[]>(fields?: F[N[number]]["field"][] | undefined) => ReturnType<Record<S, () => import("immutable").List<import("immutable").Map<keyof F[number], import("rx-store-form-plugin/main/interfaces").V<F[number]>>>>[S]> | import("immutable").List<import("immutable").Map<keyof F[N[number]], import("rx-store-form-plugin/main/interfaces").PV<F[N[number]]>>>;
    useFormDatum: <N_1 extends number = number>(field: F[N_1]["field"]) => import("immutable").Map<keyof F[N_1], import("rx-store-form-plugin/main/interfaces").PV<F[N_1]>>;
    useFormFieldValue: <N_2 extends number = number>(field: F[N_2]["field"]) => NonNullable<import("rx-store-form-plugin/main/interfaces").V<F[number]>>;
    useFormMetadata: () => import("immutable").Map<keyof M, import("immutable").Map<"errors" | "info" | "warn", import("immutable").Map<string, any>>>;
    useFormMetaDatum: <N_3 extends number = number>(field: F[N_3]["field"]) => import("immutable").Map<"errors" | "info" | "warn", import("immutable").Map<string, any>>;
};
export { controlledFormProvider, controlledImmutableFormProvider, createNormalField, createImmutableField, };
