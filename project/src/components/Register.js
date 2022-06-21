import React from "react";
import "../styles/login.scss";

export default function Register() {
  function submitHandler(e) {
    e.preventDefault();
    console.log("email = ", e.target.elements.username.value);
    console.log("password = ", e.target.elements.password.value);
  }
  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <h2>Login</h2>
        <fieldset>
          {/* <legend>Log In</legend> */}
          <ul>
            <li>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" required name="username" />
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" required name="password" />
            </li>
            <li>
              <i />
              <a onClick={() => this.changeView("PWReset")} href="#">
                Forgot Password?
              </a>
            </li>
          </ul>
        </fieldset>
        <button type="submit">Login</button>
        <button type="button" onClick={() => this.changeView("signUp")}>
          Create an Account
        </button>
      </form>
    </div>
  );
}
