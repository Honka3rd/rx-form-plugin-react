export const ImmutableFieldProvider = (props) => {
  const { field, autoBinding, children, targetId, targetSelector, type } =
    props;
  return (
    <rx-immutable-field-component
      data-field={field}
      data-type={type}
      data-target_id={targetId}
      data-target_selector={targetSelector}
      data-manual_binding={autoBinding ? "false" : "true"}
      ref={ref}
    >
      {children}
    </rx-immutable-field-component>
  );
};
