import styled from "@emotion/styled";
import gsap from "gsap";
import React, { Component } from "react";
import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";

interface State {
  texts: string[];
  inActionText: string;
}
export default class AnimationStealed extends Component<{}, State> {
  state: State = {
    texts: ["BOOST THE", "CAPABILITIES", "OF YOUR", "TEAM"],
    inActionText: "BOOST THE",
  };

  componentDidMount(): void {
    const { texts } = this.state;
    this.animationGsap();
  }

  animationGsap = async () => {
    const BoxHideText = document.getElementById("BoxHideText");
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(BoxHideText, {
      duration: 2,
      x: 400,
      ease: "power2.inOut",
    });
    tl.to(BoxHideText, {
      delay: 2,
      duration: 2,
      x: 0,
      ease: "power2.inOut",
    });

    await tl.play();
    setTimeout(async () => {
      this.setState({ inActionText: "Dio beulo" });
      await this.animationGsap();
    }, 8000);
  };

  render() {
    return (
      <Box p={46}>
        <MainText>BOOST THE</MainText>
        <MainText>CAPABILITIES</MainText>
        <MainText>OF YOUR</MainText>
        <Box style={{ position: "relative" }} row vcenter>
          <BoxLine></BoxLine>
          <MainText>
            <AnimationText>{this.state.inActionText}</AnimationText>
          </MainText>
          <BoxHideText id={"BoxHideText"}></BoxHideText>
        </Box>
      </Box>
    );
  }
}

const BoxHideText = styled(Box)`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: royalblue; */
`;

//make a box line 4 px
const BoxLine = styled(Box)`
  height: 4px;
  width: 30px;
  background-color: orange;
  margin-right: 8px;
`;

const MainText = styled(Text)`
  font-size: 38px !important;
  margin: 0;
  padding: 0;
  font-weight: 900;
  color: #fff;
`;

const AnimationText = styled(Text)`
  font-size: 60px !important;
  color: orange !important;
  padding: 0;
  margin: 0;
`;
