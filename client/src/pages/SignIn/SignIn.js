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
    const loginResult = await apiCalls.login(formState);
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
          name="showPassword-checkbox"
          type="checkbox"
          onChange={handleCheckClick}
          checked={checked}
        />
        <label id="checkBox-label" htmlFor="showPassword-checkbox">
          Show Password
        </label>
        <button type="submit" id="signInSubmitButton">
          Sign in
        </button>
      </form>
      <a id="signUp-link" href="/signUp">
        Create an account
      </a>
      <a
        id="forgotPassword-link"
        href="https://www.google.com/search?q=how+to+stop+being+an+idiot+and+forgetting+my+password"
      >
        Forgot Password?
      </a>
    </div>
  );
}

export default SignIn;
