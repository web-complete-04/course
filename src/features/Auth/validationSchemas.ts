import * as z from "zod";

const commonValidation = {
  email: z.email("Please provide a valid email address."),
  password: z
    .string()
    .min(6, "Your password needs to be at least 6 characters long."),
};

export const loginSchema = z.object(commonValidation);

export const registerSchema = z
  .object({
    ...commonValidation,
    retypePassword: z.string().min(6, "Please type your password again."),
    firstName: z.string().nonempty("Please tell us how to call you."),
    lastName: z.string().nonempty("Let us know your last name."),
  })
  .refine((data) => data.password === data.retypePassword, {
    message: "Passwords don't match.",
    path: ["retypePassword"],
  });
