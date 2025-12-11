import * as z from "zod";
type SchemaErrorMessages = {
    required?: string;
    invalid?: string;
};
export declare const schemaUtils: {
    /**
     * Phone number
     * Apply for phone number input.
     */
    phoneNumber: (props?: {
        error?: SchemaErrorMessages;
    }) => z.ZodString;
    /**
     * Email
     * Apply for email input.
     */
    email: (props?: {
        error?: SchemaErrorMessages;
    }) => z.ZodString;
};
export {};
//# sourceMappingURL=schema-utils.d.ts.map