import React, { useState } from "react";
import apiCalls from "../../services/services";

function SignIn() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleCheckClick = () => {
    setChecked(!checked);
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    const loginResult = await apiCalls.login();
    if (loginResult) {
    }
  }

  return (
    <div>
      <h1>Sign in</h1>
      <form id="signIn-form" onSubmit={handleFormSubmit}>
        <input
          id="email"
          className="form-input"
          name="email"
          type="email"
          onChange={handleChange}
          value={formState.email}
        ></input>
        <label id="emailLabel" htmlFor="email">
          Email
        </label>
        <input
          id="password"
          className="form-input"
          name="password"
          type={checked ? "text" : "password"}
          onChange={handleChange}
          value={formState.password}
        ></input>
        <label id="passwordLabel" htmlFor="password">
          Password
        </label>
        <input
          id="showPassword-checkbox"
          type="checkbox"
          onChange={handleCheckClick}
          checked={checked}
          value="Show Password"
        />
      </form>
      <a id="signUp-link" href="/signup">
        Create an account
      </a>
      <a id="forgotPassword-link" href="https://google.com">
        Forgot Password?
      </a>
    </div>
  );
}

export default SignIn;
