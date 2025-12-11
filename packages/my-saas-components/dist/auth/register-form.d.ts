interface RegisterFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
}
interface RegisterFormProps {
    onSubmit: (values: RegisterFormData) => Promise<void>;
    isLoading?: boolean;
    error?: string;
}
export declare function RegisterForm({ onSubmit, isLoading, error }: RegisterFormProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=register-form.d.ts.map