import React, { useState } from "react";
import apiCalls from "../../services/services";

function SignUp() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    riotUsername: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    const userData = { ...formState };
    delete userData.confirmPassword;
    const loginResult = await apiCalls.createUser(userData);
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
          type="text"
          onChange={handleChange}
          value={formState.password}
        ></input>
        <label id="passwordLabel" htmlFor="password">
          Password
        </label>
        <input
          id="confirmPassword"
          className="form-input"
          name="confirmPassword"
          type="text"
          onChange={handleChange}
          value={formState.confirmPassword}
        ></input>
        <label id="confirmPasswordLabel" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          id="username"
          className="form-input"
          name="username"
          type="text"
          onChange={handleChange}
          value={formState.username}
        ></input>
        <label id="usernameLabel" htmlFor="username">
          Username
        </label>
        <input
          id="riotUsername"
          className="form-input"
          name="riotUsername"
          type="text"
          onChange={handleChange}
          value={formState.riotUsername}
        ></input>
        <label id="riotUsernameLabel" htmlFor="riotUsername">
          Riot Username
        </label>
      </form>
    </div>
  );
}

export default SignUp;
