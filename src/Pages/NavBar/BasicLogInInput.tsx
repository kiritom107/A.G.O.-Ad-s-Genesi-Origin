import { UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Input } from "antd";
import React, { Component } from "react";
import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";

interface Props {
  type: string;
  value: string;
  onChange: (e: string) => void;
  placeholder: string;
}

export default class BasicLogInInput extends Component<Props> {
  render() {
    const { type, value, onChange, placeholder } = this.props;
    return (
      <Box
        flex
        style={{
          minWidth: "100%",
          minHeight: "100%",
        }}
      >
        <TextGeneral>{value}</TextGeneral>
        <InputGeneral
          id={type}
          prefix={<UserOutlined />}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </Box>
    );
  }
}

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
