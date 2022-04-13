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
    event.target.classList.remove("warning");
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  function validatePassword(password) {
    if (password < 7 || password > 64) {
      return false;
    } else {
      return true;
    }
  }

  async function checkTakenUsername(username) {
    if (username < 6 || username > 24) {
      return true;
    }
    const usernameTaken = await apiCalls.checkUsername(username);
    return usernameTaken;
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    const usernameTaken = await checkTakenUsername(formState.username);
    const validPassword = validatePassword(formState.password);
    if (!usernameTaken && validPassword) {
      const userData = { ...formState };
      delete userData.confirmPassword;
      const signUpResult = await apiCalls.createUser(userData);
      if (signUpResult.token) {
        window.location.href = "/profile";
      }
    } else {
      // add different way to alert the user, maybe a tool tip
      alert("Sorry! This username is taken");
      //make input box red
      document.getElementById("username").classList.add("warning");
    }
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form id="signUp-form" onSubmit={handleFormSubmit}>
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
        <button type="submit" id="signUpSubmitButton">
          Create account
        </button>
      </form>
    </div>
  );
}

export default SignUp;
