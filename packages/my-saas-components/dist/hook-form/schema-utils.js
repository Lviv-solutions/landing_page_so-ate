import * as z from "zod";
export const schemaUtils = {
    /**
     * Phone number
     * Apply for phone number input.
     */
    phoneNumber: (props) => z.string().min(1, { message: props?.error?.required ?? "Phone number is required!" }),
    /**
     * Email
     * Apply for email input.
     */
    email: (props) => z
        .string()
        .min(1, { message: props?.error?.required ?? "Email is required!" })
        .email({ message: props?.error?.invalid ?? "Email must be a valid email address!" }),
};
