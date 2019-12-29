import React, { PureComponent } from "react";
import styled from "styled-components";

const Card = props => (
  <Container>
    <Cover>
      <Image source={props.image}></Image>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Logo source={props.logo}></Logo>
      <ContentWarp>
        <Caption>{props.caption}</Caption>
        <Subtitle>{props.subtitle}</Subtitle>
      </ContentWarp>
    </Content>
  </Container>
);

export default Card;

const Container = styled.View`
  width: 315px;
  height: 280px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 14px;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  position: relative;
  height: 200px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 140px;
  font-size: 24px;
  color: #fff;
`;

const Content = styled.View`
  padding: 20px;
  height: 80px;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const ContentWarp = styled.View`
  padding-left: 10px;
`;

const Caption = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #3c4560;
`;

const Subtitle = styled.Text`
  padding-top: 4px;
  font-weight: 600;
  font-size: 15px;
  color: #b8bece;
`;
