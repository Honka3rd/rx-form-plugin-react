import { FormControlBasicMetadata, FormControlData, FormController, ImmutableFormController } from "rx-store-form-plugin/main/interfaces";
import { NormalComparatorsConfig } from "./interfaces";
import { controlledFormProvider, controlledImmutableFormProvider, createImmutableField, createNormalField } from "./providers";
import { NormalDynamicField } from "./providers/normal";
import { ImmutableDynamicField } from "./providers/immutable";
export declare const formStateManager: <F extends FormControlData, M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>, S extends string>(formControl: FormController<F, M, S>, config?: Partial<{
    formDataCompare: import("./interfaces").Comparator<F[number][]>;
    formFieldCompare: import("./interfaces").Comparator<F[number]>;
    formValueCompare: import("./interfaces").Comparator<F[number]["value"]>;
    formPartialCompare: import("./interfaces").Comparator<Partial<M>>;
}>) => {
    useFormData: <N extends number[] = number[]>(fields?: F[N[number]]["field"][] | undefined) => ReturnType<Record<S, () => F>[S]> | F[N[number]][];
    useFormDatum: <N_1 extends number = number>(field: F[N_1]["field"]) => F[N_1];
    useFormFieldValue: <N_2 extends number = number>(field: F[N_2]["field"]) => F[N_2]["value"] | undefined;
    useFormMetadata: () => Partial<M> | undefined;
    useFormPartialMeta: (fields: F[number]["field"][]) => Partial<M>;
    useFormMetaDatum: <N_3 extends number = number>(field: F[N_3]["field"]) => Partial<M>[F[number]["field"]];
    useControlledValidation: (deps?: any) => void;
};
export declare const formImmutableStateManager: <F extends FormControlData, M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>, S extends string>(formControl: ImmutableFormController<F, M, S>) => {
    useFormData: <N extends number[] = number[]>(fields?: F[N[number]]["field"][] | undefined) => ReturnType<Record<S, () => import("immutable").List<import("immutable").Map<keyof F[number], import("rx-store-form-plugin/main/interfaces").V<F[number]>>>>[S]> | import("immutable").List<import("immutable").Map<keyof F[N[number]], import("rx-store-form-plugin/main/interfaces").PV<F[N[number]]>>>;
    useFormDatum: <N_1 extends number = number>(field: F[N_1]["field"]) => import("immutable").Map<keyof F[N_1], import("rx-store-form-plugin/main/interfaces").PV<F[N_1]>>;
    useFormFieldValue: <N_2 extends number = number>(field: F[N_2]["field"]) => NonNullable<import("rx-store-form-plugin/main/interfaces").V<F[number]>>;
    useFormMetadata: () => import("rx-store-form-plugin/main/interfaces").ImmutableMeta<F, M>;
    useFormPartialMeta: (fields: F[number]["field"][]) => import("rx-store-form-plugin/main/interfaces").ImmutableMeta<F, M>;
    useFormMetaDatum: <N_3 extends number = number>(field: F[N_3]["field"]) => import("immutable").Map<keyof import("rx-store-form-plugin/main/interfaces").FormControlMetadata<import("./interfaces").Any, any, any>, any>;
    useControlledValidation: (deps?: any) => void;
};
export { controlledFormProvider, controlledImmutableFormProvider, createImmutableField, createNormalField, NormalDynamicField, ImmutableDynamicField, };
