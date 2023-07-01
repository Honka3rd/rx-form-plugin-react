import { RefObject, useEffect, useRef } from "react";

export const useClassName = (
  ref: RefObject<HTMLElement>,
  className?: string
) => {
  const prevClassName = useRef<string>();
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
