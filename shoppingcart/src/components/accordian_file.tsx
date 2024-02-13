import React, { Component, useState} from "react";
import { render } from "react-dom";

interface Props{
    title: string;
    content: string
}

const Accordian_file = ({title, content}: Props) => {
  const [clickState, clickStateSet] = useState(false);


  return (
    <section className="secHover">
      <div
        className={`${clickState? 'accordian active': 'accordian'}`}
        onClick={() => {
          clickStateSet(!clickState);
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
    </section>
  );
};

export default Accordian_file;
