import React, { Component, useState} from "react";
import { render } from "react-dom";
import { accordionData } from "../assets/accordianData";


const Accordian_file = () => {
const [currentIndex, currentIndexUpdate] = useState(0);

const toggleAccordion = (index : any) => {
    currentIndexUpdate(currentIndex === index ? null : index);
  };

  return (
    
    <section className="secHover">
        {accordionData.map(({ title, content }, index) => (

      
      <div key={index}
        className={`accordian ${currentIndex == index? ' active': ''}`}
        onClick={() => {
          toggleAccordion(index)
          console.log("The index is " , index);
          console.log("The current index is ", currentIndex);
        }}
      >
        <div className="items">
          <h3>{title}</h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="20">
            <polygon points="20,50 70,25 70,75" fill="white" />
          </svg>
        </div>
        <div className="data">
          <p>
            {content}
          </p>
        </div>
      </div>
      ))}
    </section>
    
  );
};

export default Accordian_file;
