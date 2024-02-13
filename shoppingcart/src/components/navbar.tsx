import React, { Component } from "react";

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
              <a href="/">Page No 1</a>
            </li>
            <li>
              <a href="/">Page No 2</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
