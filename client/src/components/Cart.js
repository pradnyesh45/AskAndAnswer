import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          name: "Rahul",
          price: 99,
          phone_number: 7596321456,
          product_name: "Watch",
          img:
            "https://rukminim1.flixcart.com/image/714/857/jr6o13k0/watch/w/q/z/1164-br-fogg-original-imaf9stmmgg2eq2f.jpeg?q=50",
          id: 1,
        },
        {
          name: "Rohan",
          price: 786,
          phone_number: 4569853621,
          product_name: "Phone",
          img:
            "https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg",
          id: 2,
        },
        {
          name: "superman",
          price: 2999,
          phone_number: 123456789,
          product_name: "washing machine",
          img:
            "https://static.toiimg.com/photo/54156532/LG-F1496ADP24-8-Kg-Fully-Automatic-Front-Load-Washing-Machine.jpg",
          id: 3,
        },
        {
          name: "shaktiman",
          price: 599,
          phone_number: 987654321,
          product_name: "cracking the coding interview",
          img: "https://miro.medium.com/max/476/1*P7pTGa-PMfCq1VWuNJioig.png",
          id: 4,
        },
      ],
    };
  }
  render() {
    const { products } = this.state;

    return (
      <div className="cart">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default Cart;
