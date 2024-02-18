import React, { Component, useState } from "react";
import Checkoutcard from "./checkoutcard";
import { productData } from "../assets/productData";

interface props {
  checkout: number[];
}

const Checkoutpage = ({ checkout }: props) => {
  return (
    <div className="mainContainer">
      <div className="mainTexts">
        <h2>Shopping Cart</h2>
        
      </div>
      <hr className="line"/>
      <div className="Container">
        {checkout.map((isbn, index) => {
          const checkoutItem = productData.find((item) =>
            item.isbn === isbn
          );
          if (!checkoutItem) return null;
          console.log(`Checkout Item at index ${index}:`, checkoutItem);
          return (
            <>
              <Checkoutcard index={index}
                  img_src={checkoutItem.img_src}
                  title={checkoutItem.title}
                  price={checkoutItem.price}
                />
              
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Checkoutpage;
