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
