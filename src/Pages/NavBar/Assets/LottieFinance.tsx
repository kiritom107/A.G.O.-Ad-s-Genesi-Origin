import React, { Component } from "react";

import verticalAnimation from "./LottieFinance.json";
import Lottie from "react-lottie";

const horizontal = {
  loop: false,
  // autoplay: true,
  animationData: verticalAnimation,
};

export class LottieFinance extends Component {
  render() {
    return <Lottie isClickToPauseDisabled options={horizontal} />;
  }
}
