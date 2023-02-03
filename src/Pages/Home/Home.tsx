import styled from "@emotion/styled";
import { Button } from "antd";

// import SplitText from "gsap";
import { Component } from "react";
// import SplitText from "gsap";

import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";
import AnimationStealed from "./AnimationStealed";
import "./HomeCss.css";
import SlideShow from "./SlideShow";

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
              {/* // L'animazione figa  */}
              <AnimationStealed />
            </Slogan>
            <CompanyLogIn>
              <Box row p={45}>
                <ButtonGetStarted>Get Started</ButtonGetStarted>
                <TextBook>Book a demo</TextBook>
              </Box>
            </CompanyLogIn>
          </FirstContainer>
          <CoolAnimation>
            <SlideShow />
          </CoolAnimation>
        </Box>
      </HomePageBox>
    );
  }
}

const TextBook = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: black;
  //underline
  text-decoration: underline;
  :hover {
    color: blue;
  }
`;

const ButtonGetStarted = styled(Button)`
  width: 130px;
  height: 50px;
  background-color: #9f148b;
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
  :hover {
    background-color: #6b085c;
    color: green;

    border: 1px solid blue;
  }
`;

const FirstContainer = styled(Box)`
  width: 40vw;
  height: 70vh;
  /* background-color: red; */
`;

const CompanyLogIn = styled(Box)`
  width: 40vw;
  height: 20vh;
  background-color: rosybrown;
`;
const Slogan = styled(Box)`
  width: 40vw;
  height: 50vh;
  /* background-color: lightblue; */
`;

const CoolAnimation = styled(Box)`
  width: 40vw;
  height: 70vh;
  overflow: hidden;
  /* background-color: #9f148b; */
  z-index: 11;
`;

const HomePageBox = styled(Box)`
  border-radius: 10px;

  padding: 20px;
  /* width: 100%; */
`;
