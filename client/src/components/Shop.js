import React, { Component } from "react";
import Cart from "./Cart";

class Shop extends Component {
  render() {
    return (
      <div style={{ margin: 10 }}>
        <input type="file" placeholder="Upload Photo" />
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Product Name" />
        <input type="number" placeholder="Price" />
        <input type="number" placeholder="Phone Number" />
        <button type="submit">Submit</button>
        <Cart />
      </div>
    );
  }
}

export default Shop;
