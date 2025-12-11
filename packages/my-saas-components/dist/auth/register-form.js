import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Card, CardHeader, CardTitle, CardContent } from "@my-saas/ui";
const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "First name must be at least 2 characters")
        .required("First name is required"),
    lastName: Yup.string()
        .min(2, "Last name must be at least 2 characters")
        .required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
    acceptTerms: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
});
export function RegisterForm({ onSubmit, isLoading = false, error }) {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
    };
    return (_jsxs(Card, { className: "w-full max-w-md mx-auto", children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx(CardTitle, { className: "text-2xl font-bold", children: "Create Account" }), _jsx("p", { className: "text-gray-600", children: "Sign up for a new account" })] }), _jsx(CardContent, { children: _jsx(Formik, { initialValues: initialValues, validationSchema: RegisterSchema, onSubmit: onSubmit, children: ({ isSubmitting }) => (_jsxs(Form, { className: "space-y-4", children: [error && (_jsx("div", { className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded", children: error })), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "firstName", className: "block text-sm font-medium text-gray-700 mb-1", children: "First Name" }), _jsx(Field, { type: "text", name: "firstName", className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "John" }), _jsx(ErrorMessage, { name: "firstName", component: "div", className: "text-red-600 text-sm mt-1" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "lastName", className: "block text-sm font-medium text-gray-700 mb-1", children: "Last Name" }), _jsx(Field, { type: "text", name: "lastName", className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "Doe" }), _jsx(ErrorMessage, { name: "lastName", component: "div", className: "text-red-600 text-sm mt-1" })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-1", children: "Email Address" }), _jsx(Field, { type: "email", name: "email", className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "john@example.com" }), _jsx(ErrorMessage, { name: "email", component: "div", className: "text-red-600 text-sm mt-1" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 mb-1", children: "Password" }), _jsx(Field, { type: "password", name: "password", className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "Create a strong password" }), _jsx(ErrorMessage, { name: "password", component: "div", className: "text-red-600 text-sm mt-1" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "confirmPassword", className: "block text-sm font-medium text-gray-700 mb-1", children: "Confirm Password" }), _jsx(Field, { type: "password", name: "confirmPassword", className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "Confirm your password" }), _jsx(ErrorMessage, { name: "confirmPassword", component: "div", className: "text-red-600 text-sm mt-1" })] }), _jsxs("div", { children: [_jsxs("label", { className: "flex items-start", children: [_jsx(Field, { type: "checkbox", name: "acceptTerms", className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1" }), _jsxs("span", { className: "ml-2 text-sm text-gray-600", children: ["I agree to the", " ", _jsx("a", { href: "#", className: "text-blue-600 hover:text-blue-500", children: "Terms of Service" }), " ", "and", " ", _jsx("a", { href: "#", className: "text-blue-600 hover:text-blue-500", children: "Privacy Policy" })] })] }), _jsx(ErrorMessage, { name: "acceptTerms", component: "div", className: "text-red-600 text-sm mt-1" })] }), _jsx(Button, { type: "submit", disabled: isSubmitting || isLoading, className: "w-full", children: isSubmitting || isLoading ? "Creating Account..." : "Create Account" }), _jsxs("div", { className: "text-center text-sm text-gray-600", children: ["Already have an account?", " ", _jsx("a", { href: "/login", className: "text-blue-600 hover:text-blue-500 font-medium", children: "Sign in" })] })] })) }) })] }));
}
