import React, { Component, useState} from 'react'
import hoddie from '../assets/hoddie.png';
import shirt from "../assets/shirt.png"
import Alert from './alert';
import { time } from 'console';
import { useTransition, animated } from 'react-spring';

interface props {
  title: string;
  img_src: string;
  description: string;
  price: string;
  isbn: number;
  addToCart: (isbn: number) =>void;
}



const Productcard = ({img_src, title, description, price, isbn, addToCart}: props) => {
    const [cartState, cartAdder] = useState<number[]>([]);
    const [alertState, setAlertState] = useState<boolean>(false);


    function timeout(delay: number) {
      return new Promise( res => setTimeout(res, delay) );
    }
    const handleaddToCart = (product : number) => {
      if (!cartState.includes(product)){
        cartAdder(cartState => [...cartState, isbn]);
        addToCart(product)
      } else{
        console.log("Already added to card");
        setAlertState(true);
        setTimeout(() => {
          setAlertState(false); // Hide the alert after 3 seconds
        }, 1200);
      }

    }
    const transition = useTransition(alertState, {
      from: {opacity: 0},
      enter: {opacity: 0.7},
      exit: {opacity: 0}
  })

    return (
      <>
        <div className="maincard container">
        
          <div className="bordercard card">
            <div className="imgdiv image">
              <img src={img_src} className='productimg' alt='Img not available' />
            </div>
            <div className="subcard content">
              <div className="titleText">{title}</div>
              <div className="animatediv">
                <div className="description" ><p>{description}</p></div>
                <div className="size"></div>
              </div>
              <div className="bottomItems">
                <div className="addToCart"><button className='button-89' onClick={()=>{handleaddToCart(isbn)}}>Add to cart</button></div>
                <div className="price">{price}</div>
                
              </div>
            </div>
          </div>
        </div>

        { transition((style, item) => item? <animated.div style={style} className="alertContain item">
          {alertState && <Alert text='Already added to cart.'/>}
        </animated.div>: '' )
        }
      </>
    )
  
};

export default Productcard;