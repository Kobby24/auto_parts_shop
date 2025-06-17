import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/main.css";
import "../static/css/cus.css";

function Login() {
  return (
    <div className="form-container">
      <main className="form-signin w-100 m-auto">
        {/* Messages placeholder */}
        {/* {messages && messages.map((message, idx) => <div key={idx}>{message}</div>)} */}

        <form className="sign-in-form needs-validation" noValidate>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="username"
              name="username"
              required
            />
            <label htmlFor="floatingInput">Username</label>
            <div className="invalid-feedback">Please enter your username.</div>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              required
            />
            <label htmlFor="floatingPassword">Password</label>
            <div className="invalid-feedback">Please enter your password.</div>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
