import { Component } from "react";
import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";

import "./NavBar.css";

import styled from "@emotion/styled";
import { Button } from "../../Components/Button";
import Modal from "../../Components/Modal/Modal";

interface Props {
  changeRoute: any;
}

interface State {
  route: string;

  selectedOption: string;
  onOpenModal: boolean;
}

export default class NavBar extends Component<Props> {
  state: State = {
    route: "home",

    selectedOption: "Home",
    onOpenModal: false,
  };

  componentDidMount(): void {}

  openRegisterModal = () => {};

  render() {
    const { onOpenModal } = this.state;
    console.log(onOpenModal);
    return (
      <Box mt={20} vcenter>
        <Box row>
          <OfficialLogo></OfficialLogo>
          <LogoText>Nome azieda</LogoText>
          <BoxLogIN row flex={1} justify="flex-end">
            <Button
              onClick={() => this.setState({ onOpenModal: !onOpenModal })}
            >
              Registrati/login
            </Button>
          </BoxLogIN>
        </Box>
        <Modal
          show={onOpenModal}
          handleClose={() => this.setState({ onOpenModal: !onOpenModal })}
        >
          <p>Modal</p>
        </Modal>
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
