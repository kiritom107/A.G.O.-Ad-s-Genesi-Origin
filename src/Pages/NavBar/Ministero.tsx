import { Component } from "react";
import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";

import "./NavBar.css";

import styled from "@emotion/styled";
import { Button, Select } from "antd";
import { Option } from "antd/lib/mentions";


export default class Ministero extends Component {
  render() {
    return (
      <FullSection row vcenter style={{ backgroundColor: "lightslategray" }}>
        <Box flex ml={30}>
          <Title>
            Ministero del istruzione, dell'università e della ricerca
          </Title>
        </Box>
        <Box row style={{ minWidth: 300, maxHeight: 30 }} vcenter>
          {/* create a select component it or en or hindi  */}
          <Select
            defaultValue="it"
            style={{ width: 120 }}
            onChange={(e) => console.log(e)}
          >
            <Option value="it">Italiano</Option>
            <Option value="en">English</Option>
            <Option value="hi">हिंदी</Option>
          </Select>
          <ButtonAcces>Accedi</ButtonAcces>
        </Box>
      </FullSection>
    );
  }
}

const FullSection = styled(Box)`
  width: 100%;
  max-height: 42px;
  background-color: rosybrown !important;
  position: relative;
`;

const ButtonAcces = styled(Button)`
  width: 100px !important;
  max-height: 24px !important;
  background-color: #f0f0f0 !important;
  border: none !important;
  border-radius: 14px !important;
  color: #000 !important;
`;

const Title = styled(Text)`
  font-size: 24px !important;
  font-weight: 600 !important;
  color: white !important;
`;
