import React from "react";

const Main = ({ brand, parts }) => {
  return (
    <>
      {/* Head Block */}
      <a
        type="button"
        href="/cart"
        style={{ textDecoration: "none", color: "white" }}
      >
        <span id="cart-icon">
          🛒<span id="cart-count">(0)</span>
        </span>
      </a>

      {/* Title Block */}
      <div className="sidebar d-flex flex-column flex-shrink-0" id="cart">
        <a
          href="/cart"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
        >
          <span className="fs-4">Shopping Cart</span>
        </a>
        <hr />
        <ul id="cart-items" className="col-md-4 justify-content-s cart-items"></ul>
        <p>
          Total: GH₵<span id="cart-total">0</span>
        </p>
      </div>

      {/* Content Block */}
      <main>
        <section className="py-5 text-center container">
          <div
            className="row py-lg-5 bg-dark opacity-70"
            style={{
              backgroundImage: `url('/static/home_pic/${brand}-shop.jpg')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "300px",
            }}
          >
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 style={{ color: "rgb(33,37,41)" }}>{brand} Shop</h1>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {parts.map((p, idx) => (
                <div
                  className="card shadow-sm"
                  data-product-id={idx + 1}
                  data-price={p.part_price}
                  key={p.part_name}
                >
                  <div className="col">
                    <a
                      href={`/product/${encodeURIComponent(p.part_name)}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={p.part_pic}
                        alt="Thumbnail"
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        style={{
                          objectFit: "cover",
                          backgroundColor: "#55595c",
                          color: "#eceeef",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      />
                    </a>
                    <div className="card-body">
                      <p className="card-text">{p.part_name}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-primary add-to-cart-btn"
                          >
                            Add to cart
                          </button>
                        </div>
                        <small>
                          <span>GH₵</span>
                          {p.part_price}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;