import React, { Component } from "react";

import verticalAnimation from "./LottieFinance.json";
import Lottie from "react-lottie";

const horizontal = {
  loop: false,
  // autoplay: true,
  animationData: verticalAnimation,
};

interface Props {
  show: boolean;
}

export class LottieFinance extends Component<Props> {
  render() {
    if (this.props.show)
      return <Lottie isClickToPauseDisabled options={horizontal} />;
    else return null;
  }
}
