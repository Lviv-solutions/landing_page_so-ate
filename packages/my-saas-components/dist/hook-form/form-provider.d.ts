import type { UseFormReturn } from 'react-hook-form';
export type FormProps = {
    onSubmit?: () => void;
    children: React.ReactNode;
    methods: UseFormReturn<any>;
};
export declare function Form({ children, onSubmit, methods }: FormProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=form-provider.d.ts.map