import { RefObject, useEffect, useRef } from "react";
import {
  FormControlComponent,
} from "rx-store-form-plugin";
import {
  FormControlBasicMetadata,
  FormControlData,
} from "rx-store-form-plugin/main/interfaces";

export const useClassName = <
  F extends FormControlData,
  M extends Partial<Record<F[number]["field"], FormControlBasicMetadata>>,
  S extends string = string
>(
  ref: RefObject<FormControlComponent<F, M, S>>,
  className?: string
) => {
  const prevClassName = useRef(className);
  useEffect(() => {
    const { current } = ref;
    if (!current) {
      return;
    }
    const previous = prevClassName.current;
    if (className !== previous && className && previous) {
      current.classList.replace(previous, className);
      prevClassName.current = className;
      return;
    }

    if (!className && previous) {
      current.classList.remove(previous);
      prevClassName.current = className;
      return;
    }

    if (className && !previous) {
      current.classList.add(className);
      prevClassName.current = className;
    }
  }, [className]);
};
