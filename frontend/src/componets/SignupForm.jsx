import React from "react";
import "../static/css/main.css";

const SignupForm = () => {
  return (
    <div className="container mx-auto align-items-center">
      <main>
        <div className="py-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="../static/logo/apple-touch-icon.png"
            alt=""
            width="72"
            height="57"
          />
          <h2 id="head">Sign-up Form</h2>
        </div>

        <div className="row g-5">
          <div className="col-md-7 col-lg-8">
            <form className="needs-validation sign-up-form" noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    required
                    name="fname"
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    required
                    name="lname"
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-sm-6">
                  {/* Error message placeholder */}
                  {/* <p style={{ color: "red" }}>{error}</p> */}
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    required
                    name="username"
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a valid password.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    name="email"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                    name="address"
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="+233 XXX XXX XXX"
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="region" className="form-label">
                    Region
                  </label>
                  <select
                    className="form-select"
                    id="region"
                    required
                    name="region"
                  >
                    <option value="" disabled selected>
                      Select a region
                    </option>
                    {/* {regions.map(region => (
                      <option key={region.region} value={region.region}>{region.region}</option>
                    ))} */}
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid region.
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <select
                    className="form-select"
                    id="city"
                    required
                    name="city"
                  >
                    {/* Cities will be populated dynamically */}
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>

                {/* <input type="hidden" name="next" value={next} /> */}
              </div>
              <hr className="my-4" />
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Sign-up
              </button>
            </form>
          </div>
        </div>
      </main>

      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <ul className="nav col-md-4 justify-content-end ">
            <li>
              <p>
                <strong>Contact Us</strong>
              </p>
            </li>
            <li className="ms-3">
              <a
                style={{ color: "#ac2bac" }}
                href="https://www.instagram.com/kobbygil24/"
                role="button"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                style={{ color: "black" }}
                href="https://x.com/KobbyGilbert1"
                role="button"
              >
                <i className="fab fa-x-twitter fa-lg"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                style={{ color: "black" }}
                href="https://github.com/Kobby24/"
                role="button"
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
            </li>
          </ul>
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              Copyright © <span id="year">{new Date().getFullYear()}</span> 24
              Auto Parts, Inc
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SignupForm;