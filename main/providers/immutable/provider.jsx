import { useEffect, useRef } from "react";
import { FormFieldComponent } from "rx-store-form-plugin/dist/main/field";

export const ImmutableFieldProvider = (props) => {
  const { field, children, targetId, targetSelector, type } = props;
  const ref = useRef();
  useEffect(() => {
    const { current } = ref;
    if (current instanceof FormFieldComponent) {
      current.setAttrBinder(() => {});
    }
  }, []);
  return (
    <rx-immutable-field-component
      data-field={field}
      data-type={type}
      data-target_id={targetId}
      data-target_selector={targetSelector}
      ref={ref}
    >
      {children}
    </rx-immutable-field-component>
  );
};
