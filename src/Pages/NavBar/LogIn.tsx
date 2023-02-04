import styled from "@emotion/styled";
import { Button } from "antd";
import React, { Component } from "react";
import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";

interface Props {
  type: string;
  options: string[];
}
export default class LogIn extends Component<Props> {
  render() {
    const { type, options } = this.props;
    return (
      <Box center p={24}>
        <Text style={{ fontSize: 40, margin: 0 }}>{type} </Text>

        <Box>
          {options.map((option) => {
            return (
              <Box key={option} center style={{ gap: 28 }} row>
                <TextOpstion>{option}</TextOpstion>
                <Box flex></Box>
                <TextInput></TextInput>
              </Box>
            );
          })}
        </Box>
        <Box
          row
          style={{
            minWidth: "90%",
            alignContent: "space-between",
          }}
        >
          <ButtonGreen>
            <Text>Ho dimeticato</Text>
          </ButtonGreen>
          <Box flex></Box>
          <ButtonRed>
            <Text>Registrati</Text>
          </ButtonRed>
        </Box>
      </Box>
    );
  }
}

const ButtonGreen = styled(Button)`
  background-color: #00b894;
  color: #fff;
  border: none;
  border-radius: 14px;
  &:hover {
    background-color: #094438;
    color: #fff;
    border: none;
  }
`;

const ButtonRed = styled(Button)`
  background-color: #d63031;
  color: #fff;
  border: none;
  border-radius: 14px;
  &:hover {
    background-color: #6c0f0d;
    color: #fff;
    border: none;
  }
`;

const TextInput = styled.input`
  width: 15vw;
  height: 40px;
  border: 1px solid #000;
  margin: 0;
  border-radius: 4px;
  padding: 0 8px;
  font-size: 16px;
  margin-bottom: 16px;
  outline: none;
  &:focus {
    border: 1px solid #000;
  }
`;

const TextOpstion = styled(Text)`
  font-size: 20px !important;
  font-weight: 500;
  margin: 0;
  margin-left: 20px;
`;
