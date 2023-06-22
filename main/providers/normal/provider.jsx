import { useEffect, useRef } from "react";
import { FormFieldComponent } from "rx-store-form-plugin/dist/main/field";
import { useNormalBinding } from "../shared";

export const NormalFieldProvider = (props) => {
  const { field, children, type, autoBinding, targetId, targetSelector } =
    props;
  const ref = useNormalBinding(autoBinding);
  return (
    <rx-field-component
      data-field={field}
      data-type={type}
      data-target_id={targetId}
      data-target_selector={targetSelector}
      ref={ref}
    >
      {children}
    </rx-field-component>
  );
};
