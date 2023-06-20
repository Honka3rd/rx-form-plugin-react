import { HTMLAttributes, ReactNode } from "react";
export type ProviderProp = {
    children: ReactNode;
    placeholder?: string;
    defaultValue?: string;
};
export type FormProviderProps = HTMLAttributes<HTMLElement> & {
    formProps: HTMLAttributes<HTMLFormElement>;
};
