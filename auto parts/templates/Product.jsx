import React from "react";

const Product = ({ det }) => {
  // det: [image, price, description, relatedParts, name]
  // relatedParts: array of { part_pic, part_name, part_price }

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
        <div className="row g-5">
          <div
            className="col-md-6 card"
            data-product-id="1"
            data-price={det[1]}
          >
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="p-4 mb-3 bg-body-tertiary rounded">
                <img src={det[0]} className="mb-0 card-img-top" alt="" />
              </div>
              <div className="container text-center">
                <div className="row align-items-center">
                  <div className="col">
                    <p>{det[4]}</p>
                    <strong className="card-text text-center">
                      GH₵<span></span>
                      {det[1]}.00
                    </strong>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary add-to-cart-btn"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product Description */}
          <div dangerouslySetInnerHTML={{ __html: det[2] }} />
        </div>

        {/* Related Parts */}
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <strong>Related Parts</strong>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {det[3].map((p, idx) => (
                <div
                  className="card shadow-sm"
                  data-product-id="1"
                  data-price={p.part_price}
                  key={idx}
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
                          {p.part_price}.00
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

export default Product;