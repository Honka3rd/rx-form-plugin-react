import { useRef } from "react";
import { useClassName } from "../shared";

export const ImmutableFieldProvider = (props) => {
  const {
    field,
    autoBinding,
    children,
    targetId,
    targetSelector,
    type,
    className,
    ...rest
  } = props;
  const ref = useRef(null);
  useClassName(ref, className);
  return (
    <rx-immutable-field-component
      data-field={field}
      data-type={type}
      data-target_id={targetId}
      data-target_selector={targetSelector}
      data-manual_binding={autoBinding ? "false" : "true"}
      ref={ref}
      {...rest}
    >
      {children}
    </rx-immutable-field-component>
  );
};
