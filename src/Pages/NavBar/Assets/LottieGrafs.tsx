import React, { Component } from "react";

import verticalAnimation from "./LottieGrafs.json";
import Lottie from "react-lottie";

const horizontal = {
  loop: false,
  // autoplay: true,
  animationData: verticalAnimation,
};

interface Props {
  show: boolean;
}

export class LottieGrafs extends Component<Props> {
  render() {
    if (this.props.show)
      return <Lottie isClickToPauseDisabled options={horizontal} />;
    else return null;
  }
}
