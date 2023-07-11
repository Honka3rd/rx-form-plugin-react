import { RefObject, useLayoutEffect, useRef } from "react";

export const useClassName = (
  ref: RefObject<HTMLElement>,
  className?: string
) => {
  const prevClassName = useRef<string>();
  useLayoutEffect(() => {
    const { current } = ref;
    if (!current) {
      return;
    }

    const classes = className?.split(" ").filter((c) => c.trim().length);

    const previous = prevClassName.current
      ?.split(" ")
      .filter((c) => c.trim().length);

    if (
      className !== prevClassName.current &&
      classes?.length &&
      previous?.length
    ) {
      previous.forEach((c) => {
        if (c?.trim().length) {
          current.classList.remove(c);
        }
      });

      classes.forEach((c) => {
        if (c?.trim().length) {
          current.classList.add(c);
        }
      });

      prevClassName.current = className;
      return;
    }

    if (!className && previous?.length) {
      previous.forEach((c) => {
        if (c?.trim().length) {
          current.classList.remove(c);
        }
      });
      prevClassName.current = className;
      return;
    }

    if (classes?.length && !previous?.length) {
      classes.forEach((c) => {
        if (c?.trim().length) {
          current.classList.add(c);
        }
      });
      prevClassName.current = className;
    }
  }, [className]);
};
