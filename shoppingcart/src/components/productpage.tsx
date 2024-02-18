import React, { Component, useState } from 'react'
import Productcard from './productcard';
import { productData } from '../assets/productData';
import '../components/productcard.css';

interface props{
  addToCart: (isbn:number) => void;
}

const Productpage = ({addToCart}:props) => {


  return(
  <>
  <div className="productPageDetails">
  {productData.map(({img_src, title, description, price, isbn},index) => (
    <Productcard img_src={img_src} title={title} description={description} price={price} isbn={isbn} addToCart={addToCart}/>
  ))}
  
  </div>
  </>
  )
};

export default Productpage;