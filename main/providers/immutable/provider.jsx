import { useImmutableBinding } from "../shared";

export const ImmutableFieldProvider = (props) => {
  const { field, autoBinding, children, targetId, targetSelector, type } =
    props;
  const ref = useImmutableBinding(autoBinding);
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
