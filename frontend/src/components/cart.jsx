import React from "react";

const Cart = () => {
    return (
        <div className="container">
            <div className="card shadow p-4">
                <h2 className="text-center mt-4">Shopping Cart</h2>
                <ul id="cart-items" className="list-group"></ul>
                <p className="mt-3">
                    <strong>Total:</strong>{" "}
                    <span id="cart-total" className="alert alert-primary p-1">
                        GH₵0
                    </span>
                </p>
                <button id="clear-cart" className="btn btn-warning">
                    Clear Cart
                </button>
            </div>
        </div>
    );
};

export default Cart;
