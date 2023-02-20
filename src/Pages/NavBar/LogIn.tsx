import styled from "@emotion/styled";
import { Button } from "antd";
import React, { Component } from "react";
import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";
import BasicLogInInput from "./BasicLogInInput";

interface Props {
  type: string;
  options: string[];
  goOnRegister: () => void;
  onClose: () => void;
}

interface State {
  userName: string;
  password: string;
}
export default class LogIn extends Component<Props, State> {
  state: State = {
    userName: "",
    password: "",
  };
  render() {
    const { type, options, onClose } = this.props;
    return (
      <Box
        flex
        style={{
          minWidth: "100%",
          minHeight: "100%",
        }}
      >
        <Box center>
          <Text
            style={{
              fontSize: 32,
              marginBottom: 46,
              fontWeight: 700,
              color: "black",
            }}
          >
            {type}
          </Text>
        </Box>

        <Box flex id={"FullContainer"} ph={40} style={{ gap: 40 }}>
          <Box id={"inputsContainer"} ml={"8%"} flex style={{ gap: 20 }}>
            <InputContainer id="username" center>
              <BasicLogInInput
                onChange={(e) => this.setState({ userName: e })}
                placeholder={"Type your username"}
                value={"Username"}
                type={"base"}
              />
            </InputContainer>

            <InputContainer id="password" center>
              <BasicLogInInput
                onChange={(e) => this.setState({ password: e })}
                placeholder={"Type your password"}
                value={"Password"}
                type={"base"}
              />
            </InputContainer>
          </Box>

          <Box style={{ width: "93%" }}>
            <ForgotPassword>Hai dimenticato la password?</ForgotPassword>
          </Box>

          <Box style={{ width: "100%" }} center>
            <ButtonAccess id="login">{type}</ButtonAccess>
          </Box>

          <Box id={"orLogInWhith"} center>
            <SecondaryText>Oppure accedi con</SecondaryText>
            <Box row flex style={{ gap: 16 }}>
              <Circle color="green" />
              <Circle color="royalblue" />
              <Circle color="grey" />
            </Box>
          </Box>

          <Box id={"orSighnUpInWhith"} center mb={"7%"}>
            <SecondaryText> Oppure registrati con</SecondaryText>
            <ForgotPassword
              onClick={() => {
                this.props.goOnRegister();
              }}
            >
              Sigh Up
            </ForgotPassword>
          </Box>
        </Box>
      </Box>
    );
  }
}

const Circle = styled(Box)<{ color: string }>`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: ${(props) => props.color}!important;
  margin: 0 8px;
`;

const SecondaryText = styled(Text)`
  font-size: 12px !important;
  color: #000000 !important;
  font-weight: 400;
  margin: 0 !important;
  padding: 0 !important;
`;

const ButtonAccess = styled(Button)`
  width: 70%;
  margin-top: 16px;
  border-radius: 4px;
  font-size: 16px;
  min-height: 32px;
  border-radius: 16px;
  font-weight: 700;
  background-color: #000000 !important;
  color: #ffffff !important;
  border: none !important;
`;

const ForgotPassword = styled.p`
  display: flex;
  margin: 0 !important;
  padding: 0 !important;
  justify-content: flex-end;
  font-size: 12px !important;
  color: #000000 !important;
  font-weight: 400;
  text-decoration: underline;
`;

const InputContainer = styled(Box)`
  width: 100%;
  height: 100% !important;
  display: flex;
`;
