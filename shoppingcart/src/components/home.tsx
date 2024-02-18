import React, { Component } from "react";
import move from "../assets/move.mp4";

type Props = {};

type State = {};

export default class Home extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <div className="videoCover">
        </div>
        <div className="textCover"><p className="textDis">Welcome to the crib!</p></div>
        <div className="return_text">
          <video src={move} autoPlay loop muted />
        </div>
      </>
    );
  }
}
