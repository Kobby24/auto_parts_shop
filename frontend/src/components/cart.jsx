import React,{useState,useEffect} from "react";

const Cart = ({item}) => {
    // const [total,setTotal] = useState(0)
    const [cartItems,setcartItems] = useState([])
    useEffect( ()=>{setcartItems([...cartItems,item])},[item]
    )

    return (
        <div className="container">
            <div className="card shadow p-4">
                <h2 className="text-center mt-4">Shopping Cart</h2>
                {cartItems?cartItems.map((item)=>
                    <ul id="cart-items" className="list-group">{item.brand}-{item.model} {item.product}</ul>
                ):null}
                
                <p className="mt-3">
                    <strong>Total:</strong>{" "}
                    <span id="cart-total" className="alert alert-primary p-1">
                        GH₵ 0
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
