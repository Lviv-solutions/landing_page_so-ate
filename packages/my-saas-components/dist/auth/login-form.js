import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Card, CardHeader, CardTitle, CardContent } from "@my-saas/ui";
const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});
export function LoginForm({ onSubmit, isLoading = false, error }) {
    const initialValues = {
        email: "",
        password: "",
        rememberMe: false,
    };
    return (_jsxs(Card, { className: "w-full max-w-md mx-auto", children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx(CardTitle, { className: "text-2xl font-bold", children: "Welcome Back" }), _jsx("p", { className: "text-gray-600", children: "Sign in to your account" })] }), _jsx(CardContent, { children: _jsx(Formik, { initialValues: initialValues, validationSchema: LoginSchema, onSubmit: onSubmit, children: ({ isSubmitting }) => (_jsxs(Form, { className: "space-y-4", children: [error && (_jsx("div", { className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded", children: error })), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-1", children: "Email Address" }), _jsx(Field, { type: "email", name: "email", className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "Enter your email" }), _jsx(ErrorMessage, { name: "email", component: "div", className: "text-red-600 text-sm mt-1" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 mb-1", children: "Password" }), _jsx(Field, { type: "password", name: "password", className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "Enter your password" }), _jsx(ErrorMessage, { name: "password", component: "div", className: "text-red-600 text-sm mt-1" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("label", { className: "flex items-center", children: [_jsx(Field, { type: "checkbox", name: "rememberMe", className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" }), _jsx("span", { className: "ml-2 text-sm text-gray-600", children: "Remember me" })] }), _jsx("a", { href: "#", className: "text-sm text-blue-600 hover:text-blue-500", children: "Forgot password?" })] }), _jsx(Button, { type: "submit", disabled: isSubmitting || isLoading, className: "w-full", children: isSubmitting || isLoading ? "Signing in..." : "Sign In" }), _jsxs("div", { className: "text-center text-sm text-gray-600", children: ["Don't have an account?", " ", _jsx("a", { href: "/register", className: "text-blue-600 hover:text-blue-500 font-medium", children: "Sign up" })] })] })) }) })] }));
}
