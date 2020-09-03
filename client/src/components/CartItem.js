import React from "react";

class CartItem extends React.Component {
  render() {
    const { name, price, phone_number, product_name } = this.props.product;
    const { product } = this.props;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img
            style={{
              height: 110,
              width: 110,
              borderRadius: 5,
              background: "#ccc",
            }}
            src={product.img}
          />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>Product: {product_name}</div>
          <div style={{ color: "#777" }}>Name: {name}</div>
          <div style={{ color: "#777" }}>Price: {price}</div>
          <div style={{ color: "#777" }}>PhoneNumber: {phone_number}</div>
        </div>
      </div>
    );
  }
}

export default CartItem;
