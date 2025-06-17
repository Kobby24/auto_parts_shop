import React from "react";

const brandsList = ["Benz", "Toyota", "Honda", "Hyundai"];

const Header = () => (
  <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/" className="nav-link px-2" style={{ textDecoration: "none", color: "white" }}>
              Home
            </a>
          </li>
        </ul>
        {/* Search form placeholder */}
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <div className="row g-2 align-items-center">
            <div className="col">
              <select className="form-select search" id="brand" aria-label="Default select example" name="brand" disabled>
                <option disabled selected>
                  Brand
                </option>
              </select>
            </div>
            <div className="col">
              <select className="form-select search" id="model" aria-label="Default select example" name="model" disabled>
                <option disabled selected>
                  Model
                </option>
              </select>
            </div>
            <div className="col">
              <select className="form-select search" id="year" aria-label="Default select example" name="year" disabled>
                <option disabled selected>
                  Year
                </option>
              </select>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-dark" id="search-button" disabled>
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </form>
        <div className="text-end">
          {/* Messages and Auth Buttons placeholder */}
          <a href="/login" type="button" className="btn btn-outline-light me-2">
            Login
          </a>
          <a href="/signup" type="button" className="btn btn-warning">
            Sign-up
          </a>
          {/* If logged in, show logout */}
          {/* <a href="/logout" type="button" className="btn btn-warning">Logout</a> */}
        </div>
      </div>
    </div>
    <div className="d-flex gap-2 justify-content-center py-5">
      {brandsList.map((brand) => (
        <a key={brand} href={`/shop/${brand}`}>
          <span className={`badge bg-${brand === "Benz" ? "primary" : brand === "Toyota" ? "secondary" : brand === "Honda" ? "success" : "danger"}-subtle text-${brand === "Benz" ? "primary" : brand === "Toyota" ? "secondary" : brand === "Honda" ? "success" : "danger"}-emphasis rounded-pill`}>
            {brand}
          </span>
        </a>
      ))}
    </div>
  </header>
);

export default Header;
