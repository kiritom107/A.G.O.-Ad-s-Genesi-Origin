import styled from "@emotion/styled";
import { Button, Input } from "antd";
import React, { Component } from "react";
import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";
import BasicLogInInput from "./BasicLogInInput";

interface Props {
  type: string;
  options: string[];
  closeModal: () => void;
}

interface State {
  userName: string;
  password: string;
  surName: string;
  sesso: string;
  dataNascita: string;
  mail: string;
  mailConfirm: string;
  passwordConfirm: string;
  step: number;
}
export default class Registrati extends Component<Props, State> {
  state: State = {
    userName: "",
    password: "",
    step: 0,
    surName: "",
    sesso: "",
    dataNascita: "",
    mail: "",
    mailConfirm: "",
    passwordConfirm: "",
  };
  render() {
    const { type, options } = this.props;
    const { step } = this.state;
    return (
      <Box
        row
        style={{ minWidth: "100%", minHeight: "100%", gap: 24 }}
        pv={40}
        ph={40}
      >
        <Box
          style={{
            minWidth: "50%",
            minHeight: "100%",
            backgroundColor: "blueviolet",
          }}
        ></Box>
        <Box
          flex
          style={{
            minWidth: "50%",
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

          <Box flex id={"FullContainer"} pb={28} style={{ gap: 34 }}>
            {step === 0 && (
              <Box id={"inputsContainer"} ml={"8%"}>
                <InputContainer id="Nome" center>
                  <BasicLogInInput
                    onChange={(e) => this.setState({ userName: e })}
                    placeholder={"Type your Nome"}
                    value={"Nome"}
                    type={"base"}
                  />
                </InputContainer>

                <InputContainer id="Cognome" center>
                  <BasicLogInInput
                    onChange={(e) => this.setState({ password: e })}
                    placeholder={"Type your Cognome"}
                    value={"Cognome"}
                    type={"base"}
                  />
                </InputContainer>

                <InputContainer id="DataDiNascita" center>
                  <BasicLogInInput
                    onChange={(e) => this.setState({ password: e })}
                    placeholder={"Type your Data Di Nascita"}
                    value={"Data Di Nascita"}
                    type={"base"}
                  />
                </InputContainer>
              </Box>
            )}

            {step === 1 && (
              <Box
                id={"inputsContainer"}
                flex
                style={{ gap: 48, marginTop: 78 }}
              >
                <Box row style={{ gap: 24 }}>
                  <Box
                    style={{
                      minWidth: "40%",
                    }}
                    row
                    vcenter
                  >
                    <Box flex>
                      <InputGeneral
                        id={type}
                        // onChange={(e) => onChange(e.target.value)}
                        placeholder={"Inserisci email"}
                      />
                    </Box>
                  </Box>
                  <Box
                    style={{
                      minWidth: "40%",
                    }}
                  >
                    <Box row vcenter>
                      <Box flex>
                        <InputGeneral
                          id={type}
                          // onChange={(e) => onChange(e.target.value)}
                          placeholder={"inserisci email di conferma"}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box row style={{ gap: 24 }}>
                  <Box
                    style={{
                      minWidth: "40%",
                    }}
                    row
                    vcenter
                  >
                    <Box flex>
                      <InputGeneral
                        id={type}
                        // onChange={(e) => onChange(e.target.value)}
                        placeholder={"Inserisci password"}
                      />
                    </Box>
                  </Box>
                  <Box
                    style={{
                      minWidth: "40%",
                    }}
                  >
                    <Box row vcenter>
                      <Box flex>
                        <InputGeneral
                          id={type}
                          // onChange={(e) => onChange(e.target.value)}
                          placeholder={"inserisci password di conferma"}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box row style={{ gap: 24 }}>
                  <Box
                    style={{
                      minWidth: "40%",
                    }}
                    row
                    vcenter
                  >
                    <Box flex>
                      <InputGeneral
                        id={type}
                        // onChange={(e) => onChange(e.target.value)}
                        placeholder={"Inserisci email"}
                      />
                    </Box>
                  </Box>
                  <Box
                    style={{
                      minWidth: "40%",
                    }}
                  >
                    <Box row vcenter>
                      <Box flex>
                        <InputGeneral
                          id={type}
                          // onChange={(e) => onChange(e.target.value)}
                          placeholder={"inserisci email di conferma"}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}

            {this.state.step === 0 && (
              <Box center mt={"17%"}>
                <Box
                  center
                  style={{
                    backgroundColor: "royalblue",
                    minHeight: 36,
                    radius: 16,
                    marginTop: "12%",
                    width: "75%",
                  }}
                >
                  <SecondaryText
                    onClick={() => {
                      if (step < 2) {
                        this.setState({ step: step + 1 });
                      }
                    }}
                  >
                    Next Step Boii{" "}
                  </SecondaryText>
                </Box>
              </Box>
            )}
            {this.state.step === 1 && (
              <Box
                center
                mt={"17%"}
                className="container"
                onClick={() => {
                  this.props.closeModal();
                }}
              >
                <a className="button" href="#" style={{ color: "#1e9bff" }}>
                  <Box
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      padding: 16,
                      position: "absolute",
                      minWidth: 150,
                      right: 75,
                      top: 10,
                    }}
                  ></Box>
                  <Text
                    style={{
                      position: "absolute",
                      top: 4,
                      right: 100,
                      fontSize: 24,
                      fontWeight: 700,
                      fontFamily: "Roboto",
                      color: "white",
                    }}
                  >
                    Registrati
                  </Text>
                </a>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    );
  }
}

const BlackText = styled.p`
  font-size: 12px !important;
  color: #000000 !important;
`;

const Circle = styled(Box)<{ color: string }>`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: ${(props) => props.color}!important;
  margin: 0 8px;
`;

const SecondaryText = styled(Text)`
  font-size: 18px !important;
  color: #000000 !important;
  font-weight: 700;
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
  width: auto;
  height: 50%;
`;

const TextGeneral = styled(Text)`
  font-size: 16px !important;
  padding: 0 !important;
  color: black !important;
  margin: 0 !important;
  font-weight: 700;
`;

const InputGeneral = styled(Input)`
  height: 32px;

  margin: 0;
  border-radius: 4px;

  font-size: 16px;
`;
