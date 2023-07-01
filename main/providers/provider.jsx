import { forwardRef } from "react";
export const FormProvider = forwardRef((props, ref) => {
  const { formProps, formLocator, ...containerProps } = props;
  return (
    <rx-form-component {...containerProps} ref={ref} data-form_id={formLocator}>
      <form {...formProps} data-locator={formLocator}>
        {props.children}
      </form>
    </rx-form-component>
  );
});
