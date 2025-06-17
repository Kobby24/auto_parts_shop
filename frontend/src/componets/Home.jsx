import React from "react";


const Home = () => (
  <>
    <main>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src="/static/home_pic/benzboot.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h1>We have Back Boots,Fenders and Doors.</h1>
              <p>
                <a className="btn btn-lg btn-primary" style={{ backgroundColor: "#003161" }} href="#">
                  See More
                </a>
              </p>
            </div>
          </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src="/static/home_pic/405_06603651-b517-4a66-9deb-29de051c164f.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h1>Front and Back Bumpers</h1>
            <p>
              <a className="btn btn-lg btn-primary" style={{ backgroundColor: "#003161" }} href="#">
                Shop For Yours
              </a>
            </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src="/static/home_pic/Photo-1-top-headlights.jpeg" className="d-block w-100" alt="..." />
          <div className="carousel-caption" style={{ alignItems: "center" }}>
            <h1>Headlight,Taillights and Foglights</h1>
            <p>
              <a className="btn btn-lg btn-primary" style={{ backgroundColor: "#003161" }} href="#">
                Shop Now
              </a>
            </p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Car Brands with Parts in Stock</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <a href="#" style={{ textDecoration: "none" }}>
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: "url('/static/home_pic/Webp.net-resizeimage.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Upgrade Your Benz, One Part at a Time.</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="/static/home_pic/benz_logo.jpeg" alt="Benz" width="32" height="32" className="rounded-circle border border-white" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <small>Benz</small>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#" style={{ textDecoration: "none" }}>
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: "url('/static/home_pic/toyota.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Toyota Parts for Smooth Drives</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="/static/home_pic/toyota_logo.jpg" alt="Toyota" width="32" height="32" className="rounded-circle border border-white" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <small>Toyota</small>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#" style={{ textDecoration: "none" }}>
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: "url('/static/home_pic/honda_pic.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Keep Your Honda Running Strong.</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="/static/home_pic/honda_logo.jpg" alt="Honda" width="32" height="32" className="rounded-circle border border-white" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <small>Honda</small>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">From Toyota to Benz, We've Got You Covered. </h2>
        <p className="lead">
          Whether you're replacing a dented hood or upgrading your car's style, our premium bonnets are designed for a perfect fit and unmatched durability. Find the ideal match for your ride today!
        </p>
      </div>
      <div className="col-md-5">
        <img
          src="/static/home_pic/TOYOTA-CAMRY-BONNET.jpg"
          alt="Toyota Camry Bonnet"
          className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          style={{
            backgroundColor: "var(--bs-secondary-bg)",
            color: "var(--bs-secondary-color)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        />
      </div>
    </div>

    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">The Best Parts for the Best Cars.</h2>
        <p className="lead">
          Enhance your ride with precision-crafted doors built for durability and elegance. Perfect fit, flawless finish—because your car deserves the best!
        </p>
      </div>
      <div className="col-md-5 order-md-1">
        <img
          src="/static/home_pic/door.jpg"
          alt="Car Door"
          className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          style={{
            backgroundColor: "var(--bs-secondary-bg)",
            color: "var(--bs-secondary-color)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        />
      </div>
    </div>

    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">Genuine Fog lights, Unmatched Performance.</h2>
        <p className="lead">
          Navigate through foggy roads with confidence using our high-quality fog lights. Designed for clarity and safety, they’re the perfect upgrade for any car.
        </p>
      </div>
      <div className="col-md-5">
        <img
          src="/static/home_pic/foglight.jpg"
          alt="Fog Light"
          className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          style={{
            backgroundColor: "var(--bs-secondary-bg)",
            color: "var(--bs-secondary-color)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        />
      </div>
    </div>
    <hr className="featurette-divider" />
    </main>
  </>
);

export default Home;