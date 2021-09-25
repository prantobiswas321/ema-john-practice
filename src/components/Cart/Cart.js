import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // console.log(props.cart);
    let totalPrice = 0;
    let ship = 0;
    let grandTotal = 0;
    for (const product of cart) {
        ship = ship + product.shipping;
        totalPrice = totalPrice + product.price;
        grandTotal = totalPrice + ship;
    }
    return (
        <div>
            <div className="alignment">
                <h3>Order summary</h3>
                <h5>Items ordered: {cart.length}</h5>
            </div>
            <p><small>Total Price: ${grandTotal > 0 ? totalPrice.toFixed(2) : 0}</small></p>
            <p><small>Shipping: ${grandTotal > 0 ? ship.toFixed(2) : 0}</small></p>
            <p><small>Grand total: ${grandTotal > 0 ? grandTotal.toFixed(2) : 0}</small></p>
        </div>
    );
};

export default Cart;