import { useEffect, useRef } from "react";
import { FormFieldComponent } from "rx-store-form-plugin/dist/main/field";

export const ImmutableFieldProvider = (props) => {
  const { field, children, placeholder, defaultValue, type } = props;
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
      defaultValue={defaultValue}
      placeholder={placeholder}
    >
      {children}
    </rx-immutable-field-component>
  );
};
