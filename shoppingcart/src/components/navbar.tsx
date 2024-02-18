import React, { Component } from "react";
import { Link } from "react-router-dom";

type Props = {};

type State = {};

export default class Navbar extends Component<Props, State> {
  render() {
    return (
      <>
        <div className="navBar">
          <div className="">
            <a href="/">Shopping Cart System</a>
          </div>
          <ul>
            <li>
            <Link to="/accordian">Accordian List</Link>
            </li>
            <li>
              <Link to="/productpage">Shopping Cart</Link>
            </li>
            <li>
            <Link to="/checkoutpage">Check Out</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
