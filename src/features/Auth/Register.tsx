// import { Api } from "../../utils/api";

// const registerApi = new Api('register');

export function Register() {
  return (
    <form className="brandForm">
      <h1>Register</h1>

      <label htmlFor="email">Email</label>
      <input type="email" />

      <label htmlFor="password">Password</label>
      <input type="password" />

      <label htmlFor="retypePassword">Retype Password</label>
      <input type="password" />

      <label htmlFor="firstName">First Name</label>
      <input type="text" />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" />

      <button type="submit">Register</button>
    </form>
  );
}
