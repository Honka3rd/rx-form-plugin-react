export const NormalFieldProvider = (props) => {
  const { field, children, type, autoBinding, targetId, targetSelector } =
    props;
  return (
    <rx-field-component
      data-field={field}
      data-type={type}
      data-target_id={targetId}
      data-target_selector={targetSelector}
      data-manual_binding={autoBinding ? "false" : "true"}
      ref={ref}
    >
      {children}
    </rx-field-component>
  );
};
