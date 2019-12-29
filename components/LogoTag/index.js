import React, { PureComponent } from "react";
import styled from "styled-components";

const LogoTag = props => (
  <Container>
    <Image source={props.image}></Image>
    <Text>{props.text}</Text>
  </Container>
);

export default LogoTag;

const Container = styled.View`
  height: 60px;
  align-items: center;
  margin: 0 8px;
  padding: 16px 12px;
  flex-direction: row;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Text = styled.Text`
  font-size: 17px;
  font-weight: 600;
  margin-left: 8px;
`;
