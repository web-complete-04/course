import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useZodValidation } from "../../hooks/useZodValidation";
import { Api } from "../../utils/api";
import { loginSchema as validationSchema } from "./validationSchemas";
import { useAuth } from "./context/useAuth";
import type { Auth } from "./types";

const loginApi = new Api("login");

export function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const { errors, isValid } = useZodValidation(validationSchema);

  const { login, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(user) {
      void navigate('/');
    }
  }, [user, navigate]);

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    if (!isValid(formValues)) return;

    void loginApi.create<Auth>(formValues).then(login);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValues = {...formValues, [e.target.name]: e.target.value};

    if(errors) {
      isValid(newValues);
    }

    setFormValues(newValues);    
  }  

  return (
    <form className="brandForm" onSubmit={handleSubmit}>
      <h1>Login</h1>

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

      <button type="submit">Login</button>
    </form>
  );
}
