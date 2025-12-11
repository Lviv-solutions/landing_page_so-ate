interface LoginFormData {
    email: string;
    password: string;
    rememberMe: boolean;
}
interface LoginFormProps {
    onSubmit: (values: LoginFormData) => Promise<void>;
    isLoading?: boolean;
    error?: string;
}
export declare function LoginForm({ onSubmit, isLoading, error }: LoginFormProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=login-form.d.ts.map