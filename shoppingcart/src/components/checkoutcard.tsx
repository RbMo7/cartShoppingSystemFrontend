import React, { Component, useState } from 'react'
import hoddie from '../assets/hoddie.png'
import { productData } from '../assets/productData'

interface props{
  img_src: string;
  title: string;
  price: string;
  index: number
}

const Checkoutcard = ({img_src, title, price, index}: props) => {

  const [checkOutQuantity, setCheckOutQuantity] = useState<number>(1);
  function handleClick(checkOutQuantity:number) {
    if(checkOutQuantity < 2){
      setCheckOutQuantity(1);
    }
    else{
      setCheckOutQuantity(checkOutQuantity-1)
    }
  };

  return(
    <>
      <div className='checkOutContainer'>
      <div className="indexNo"> {index} </div>
        <div className="subContainer">
        
          <div className="imgContainer">
            <img src={img_src} className='checkOutImage' alt="" />
          </div>
          <div className="titleCheckout"><p className='checkOutText'>{title}</p></div>
          <div className="quantityCheckout">
            <button className='checkoutbtn additionbtn button-89' onClick={()=>(setCheckOutQuantity(checkOutQuantity+1))}>+</button>
            <p className='checkOutQuantity'>{checkOutQuantity}</p>
              <button className='checkoutbtn substractbtn button-89' onClick={()=>handleClick(checkOutQuantity)}>-</button>
          </div>
          <div className="price"><p className='pricetag'>{price}</p></div>
        </div>
      </div>
    </>
  );

}

export default Checkoutcard;