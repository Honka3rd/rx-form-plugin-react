export const NormalFieldProvider = (props) => {
  const { field, children, placeholder, defaultValue, type } = props;
  return (
    <rx-field-component
      data-field={field}
      data-type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
    >
      {children}
    </rx-field-component>
  );
};
