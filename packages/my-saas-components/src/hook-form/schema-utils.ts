import * as z from "zod";

// ----------------------------------------------------------------------

type SchemaErrorMessages = {
  required?: string;
  invalid?: string;
};

export const schemaUtils = {
  /**
   * Phone number
   * Apply for phone number input.
   */
  phoneNumber: (props?: { error?: SchemaErrorMessages }) =>
    z.string().min(1, { message: props?.error?.required ?? "Phone number is required!" }),

  /**
   * Email
   * Apply for email input.
   */
  email: (props?: { error?: SchemaErrorMessages }) =>
    z
      .string()
      .min(1, { message: props?.error?.required ?? "Email is required!" })
      .email({ message: props?.error?.invalid ?? "Email must be a valid email address!" }),
};
