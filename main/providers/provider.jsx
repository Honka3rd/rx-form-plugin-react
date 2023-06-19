import { forwardRef } from "react";
export const FormProvider = forwardRef((props, ref) => {
  const { formProps, ...containerProps } = props;
  return (
    <rx-form-component {...containerProps} ref={ref}>
      <form {...formProps}>{props.children}</form>
    </rx-form-component>
  );
});
