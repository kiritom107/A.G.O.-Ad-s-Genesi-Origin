import { Component } from "react";
import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";

import "./NavBar.css";

import styled from "@emotion/styled";
import { Button } from "../../Components/Button";
import Modal from "../../Components/Modal/Modal";
import LogIn from "./LogIn";
import Logo from "./Assets/imgLogo.png";
import Registrati from "./Registrati";

interface Props {
  changeRoute: any;
}

interface State {
  route: string;
  selectedOption: string;
  openLogInModal: boolean;
  openRegisterModal: boolean;
}

export default class NavBar extends Component<Props> {
  state: State = {
    route: "home",
    selectedOption: "Home",
    openLogInModal: false,
    openRegisterModal: false,
  };

  componentDidMount(): void {}

  openRegisterModal = () => {};

  render() {
    const { openLogInModal, openRegisterModal } = this.state;
    console.log(openLogInModal);
    return (
      <Box mt={20} vcenter>
        <Box row>
          <OfficialLogo>
            <img
              unselectable="on"
              style={{ borderRadius: "50%" }}
              src={Logo}
              alt="Logo"
            />
          </OfficialLogo>
          <LogoText>A.G.O. Ad's Genesi Origin</LogoText>
          <BoxLogIN row flex={1} justify="flex-end">
            <RegistratI
              onClick={() => this.setState({ openLogInModal: !openLogInModal })}
            >
              <Text style={{ color: "white", fontSize: 20 }}>
                RegistratI/login
              </Text>
            </RegistratI>
          </BoxLogIN>
        </Box>
        <Modal
          show={openLogInModal}
          handleClose={() => this.setState({ openLogInModal: !openLogInModal })}
          styleInternal={{
            width: "33vw",
            height: "80vh",
            backgroundColor: "white",
          }}
        >
          <LogIn
            type="Login"
            options={["Email", "Password"]}
            onClose={() => this.setState({ openLogInModal: !openLogInModal })}
            goOnRegister={() =>
              this.setState({ openRegisterModal: !openRegisterModal })
            }
          />
        </Modal>
        {/* modal regitrati */}
        <Modal
          show={openRegisterModal}
          handleClose={() =>
            this.setState({ openRegisterModal: !openRegisterModal })
          }
          styleInternal={{
            width: "66vw",
            height: "80vh",
            backgroundColor: "white",
          }}
        >
          <Registrati
            type="Registati"
            closeModal={() =>
              this.setState({
                openRegisterModal: !openRegisterModal,
                openLogInModal: !openLogInModal,
              })
            }
            options={["Email", "Password"]}
          />
        </Modal>
      </Box>
    );
  }
}

const RegistratI = styled(Button)`
  position: relative;
  margin-right: 30px;
  width: 190px;
  //royal bluw backgroud and on hover lightblue
  background-color: #4169e1;
  &:hover {
    background-color: #87cefa;
  }
`;

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
  position: relative;
  margin-left: 30px;
  width: 80px;
  height: 70px;
  border-radius: 50%;
`;
