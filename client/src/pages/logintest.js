import React from "react";
import "./pages.css";
import { LOG_IN } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import auth from "../utils/auth";

function Logintest() {
  const [login, { error }] = useMutation(LOG_IN);
  const [formState, setFormState] = React.useState({ email: "", password: "" });

  //   console.log(form.current.email);

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = response.data.login.token;
      auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  // HERE IS WHERE THE JWT STUFF WILL GO

  return (
    <main>
      <div className="login">
        <div className="container">
          <form>
            <p>Login</p>
            <input
              placeholder="Your email"
              name="email"
              type="email"
              class="input"
              onChange={handleInputChange}
            />
            <br />
            <input
              placeholder="******"
              name="password"
              type="password"
              class="input"
              onChange={handleInputChange}
            />
            <br />
            <p>Sign Up</p>
            <input
              placeholder="Your username"
              name="username"
              type="text"
              class="input"
            />
            <br />
            <input
              placeholder="Your email"
              name="email"
              type="email"
              class="input"
            />
            <br />
            <input
              placeholder="******"
              name="password"
              type="password"
              class="input"
            />
            <br />
            <button type="submit" onClick={handleLogin}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Logintest;
