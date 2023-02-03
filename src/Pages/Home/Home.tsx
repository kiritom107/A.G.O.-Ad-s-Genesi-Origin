import styled from "@emotion/styled";
import { Button } from "antd";
import gsap from "gsap";

// import SplitText from "gsap";
import { Component } from "react";
// import SplitText from "gsap";

import { Box } from "../../Components/Box";
import "./HomeCss.css";
import img from "./Assets/img-2.jpg";

interface State {
  route: string;
  imgLoaded: string[];
  actualImg: number;
  succseveImg: number;
}
export default class HomePage extends Component<{}, State> {
  state: State = {
    route: "home",
    imgLoaded: [],
    actualImg: 0,
    succseveImg: 1,
  };
  componentDidMount(): void {}

  render() {
    const { actualImg, succseveImg } = this.state;
    console.log(actualImg, succseveImg);

    const strig = "imgContainer";
    //take this string and trsnform it in a array of string
    const array = strig.split("");

    return (
      <HomePageBox center>
        <Box flex style={{ backgroundColor: "royalblue", gap: 24 }} p={42} row>
          <FirstContainer style={{ gap: 8 }}>
            <Slogan>
              <AnimationStealed />
            </Slogan>
            <CompanyLogIn></CompanyLogIn>
          </FirstContainer>
          <CoolAnimation></CoolAnimation>
        </Box>
      </HomePageBox>
    );
  }
}

const FirstContainer = styled(Box)`
  width: 40vw;
  height: 70vh;
  background-color: red;
`;

const CompanyLogIn = styled(Box)`
  width: 40vw;
  height: 20vh;
  background-color: rosybrown;
`;
const Slogan = styled(Box)`
  width: 40vw;
  height: 50vh;
  background-color: lightblue;
`;

const CoolAnimation = styled(Box)`
  width: 40vw;
  height: 70vh;
  background-color: #9f148b;
`;

const HomePageBox = styled(Box)`
  border-radius: 10px;

  padding: 20px;
  /* width: 100%; */
`;
