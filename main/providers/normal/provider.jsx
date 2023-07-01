import { useRef } from "react";
import { useClassName } from "../shared";

export const NormalFieldProvider = (props) => {
  const {
    field,
    children,
    type,
    autoBinding,
    targetId,
    targetSelector,
    className,
    ...rest
  } = props;
  const ref = useRef(null);
  useClassName(ref, className);
  return (
    <rx-field-component
      data-field={field}
      data-type={type}
      data-target_id={targetId}
      data-target_selector={targetSelector}
      data-manual_binding={autoBinding ? "false" : "true"}
      ref={ref}
      {...rest}
    >
      {children}
    </rx-field-component>
  );
};
