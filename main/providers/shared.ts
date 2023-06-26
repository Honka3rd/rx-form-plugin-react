import { useEffect, useRef } from "react";
import { IRFieldComponent, NRFieldComponent } from "rx-store-form-plugin";
import {
  FormControlBasicMetadata,
  FormControlData,
} from "rx-store-form-plugin/main/interfaces";

export const useNormalBinding = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string = string,
  N extends number = number
>(
  autoBinding?: boolean
) => {
  const ref = useRef<NRFieldComponent<F, M, S, N>>(null);
  useEffect(() => {
    const { current } = ref;
    if (autoBinding) {
      return;
    }
    if (current instanceof NRFieldComponent) {
      current.setAttrBinder(() => {});
    }
  }, [autoBinding]);
  return ref;
};

export const useImmutableBinding = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string = string,
  N extends number = number
>(
  autoBinding?: boolean
) => {
  const ref = useRef<IRFieldComponent<F, M, S, N>>(null);
  useEffect(() => {
    const { current } = ref;
    if (autoBinding) {
      return;
    }
    if (current instanceof IRFieldComponent) {
      current.setAttrBinder(() => {});
    }
  }, [autoBinding]);
  return ref;
};
