import React, { Component } from "react";
import { useTransition, animated } from 'react-spring';
interface props {
  text: string;
}
const Alert = ({ text }: props) => {
  return (
    <>
        <div className="alertDiv"><p className="alertText">{text}</p></div>
        
    </>
  );
};

export default Alert;
