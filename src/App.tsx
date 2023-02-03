import styled from "@emotion/styled";
import { Component } from "react";
import AppStore from "./AppStore";
import { Box } from "./Components/Box";

import HomePage from "./Pages/Home/Home";
import NavBar from "./Pages/NavBar/NavBar";

interface State {
  part: number;
  selected: string;
  step: string;
}

export default class App extends Component<{}, State> {
  state: State = {
    part: 1,
    selected: "",
    step: "home",
  };

  goNext = () => {
    this.setState({ part: this.state.part + 1 });
  };

  goNextValue = (e: any) => {
    this.setState({ selected: e });
    this.setState({ part: this.state.part + 1 });
  };

  goBack = () => {
    this.setState({ part: this.state.part - 1 });
  };

  render() {
    return (
      // <BrowserRouter>
      <Box>
        <Box flex={1}>
          <AllContainer>
            <NavBar
              changeRoute={async (e: any) => await this.setState({ step: e })}
            />
            {this.state.step === "home" && <HomePage />}
          </AllContainer>
        </Box>
      </Box>
      // </BrowserRouter>
    );
  }
}

const AllContainer = styled(Box)`
  /* width: 1000px;
  height: 1000px;
   */

  border-radius: 0;
  background-color: lightgreen;

  height: 100vh;
  width: 100vw;
  /* min-height: 100vh; */
  z-index: 9999px;
`;
