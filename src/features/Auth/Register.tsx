import { useState } from "react";
import { useZodValidation } from "../../hooks/useZodValidation";
import { Api } from "../../utils/api";
import * as z from "zod";

const registerApi = new Api("register");

const validationSchema = z
  .object({
    email: z.email("Please provide a valid email address."),
    password: z
      .string()
      .min(6, "Your password needs to be at least 6 characters long."),
    retypePassword: z.string().min(6, "Please type your password again."),
    firstName: z.string().nonempty("Please tell us how to call you."),
    lastName: z.string().nonempty("Let us know your last name."),
  })
  .refine((data) => data.password === data.retypePassword, {
    message: "Passwords don't match.",
    path: ["retypePassword"],
  });

export function Register() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    retypePassword: "",
    firstName: "",
    lastName: "",
  });
  const { errors, isValid } = useZodValidation(validationSchema);

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    // const data = new FormData(e.target);
    // const jsonData = Object.fromEntries(data.entries()) as Record<
    //   keyof z.infer<typeof validationSchema>,
    //   string
    // >;

    if (!isValid(formValues)) return;

    const { retypePassword, ...dataForServer } = formValues;

    void registerApi.create(dataForServer).then((res) => console.log(res));
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    // const value = e.target.value;
    // const newFormValues = {...formValues};
    // const inputName = e.target.name as keyof typeof formValues;
    // newFormValues[inputName] = value;

    if(errors) {
      isValid(formValues);
    }

    setFormValues({...formValues, [e.target.name]: e.target.value});
  }

  return (
    <form className="brandForm" onSubmit={handleSubmit}>
      <h1>Register</h1>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
      />
      {errors?.email && <p className="errorMessage">{errors.email}</p>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formValues.password}
        onChange={handleInputChange}
      />
      {errors?.password && <p className="errorMessage">{errors.password}</p>}

      <label htmlFor="retypePassword">Retype Password</label>
      <input
        type="password"
        id="retypePassword"
        name="retypePassword"
        value={formValues.retypePassword}
        onChange={handleInputChange}
      />
      {errors?.retypePassword && (
        <p className="errorMessage">{errors.retypePassword}</p>
      )}

      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formValues.firstName}
        onChange={handleInputChange}
      />
      {errors?.firstName && <p className="errorMessage">{errors.firstName}</p>}

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formValues.lastName}
        onChange={handleInputChange}
      />
      {errors?.lastName && <p className="errorMessage">{errors.lastName}</p>}

      <button type="submit">Register</button>
    </form>
  );
}
