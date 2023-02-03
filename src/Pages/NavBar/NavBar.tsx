import { Component } from "react";
import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./NavBar.css";

import styled from "@emotion/styled";
import { NavBarOptions } from "../../Mock/MockData";
import { NavBarOption } from "../../Types/NavBarOption";
import { Button } from "../../Components/Button";

interface Props {
  changeRoute: any;
}

interface State {
  route: string;
  NavBarOptions: NavBarOption[];
  selectedOption: string;
}

export default class NavBar extends Component<Props> {
  state: State = {
    route: "home",
    NavBarOptions: NavBarOptions.navBarOptions, //dati mokati
    selectedOption: "Home",
  };

  componentDidMount(): void {}

  render() {
    console.log(this.state.NavBarOptions);
    return (
      <Box mt={20} vcenter>
        <Box row>
          <OfficialLogo></OfficialLogo>
          <LogoText>Nome azieda</LogoText>
          <BoxLogIN row flex={1} justify="flex-end">
            <Button>Registrati/loging</Button>
          </BoxLogIN>
        </Box>
      </Box>
    );
  }
}

const BoxLogIN = styled(Box)`
  position: relative;
  margin-right: 30px;
  width: 80px;
`;
const LogoText = styled(Text)`
  font-size: 40px !important;
  font-weight: 600;
  margin: 0;
  margin-left: 20px;
`;

const OfficialLogo = styled(Box)`
  background-color: #5967c0 !important;
  position: relative;
  margin-left: 30px;
  width: 80px;
  height: 70px;
`;
