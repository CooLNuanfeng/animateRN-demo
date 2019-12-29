// import * as WebBrowser from 'expo-web-browser';
import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styled from "styled-components";
import Card from "../components/Card";
import IconPlay from "../components/Icons/iconPlay";
import LogoTag from "../components/LogoTag";

export default function HomeScreen() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <TitleBar>
            <Avatar source={require("../assets/images/avatar.jpg")}></Avatar>
            <TitleInfo>
              <Title>Welcome back,</Title>
              <Name>Blue</Name>
            </TitleInfo>
            <TitleIcons>
              <Ionicons name="md-notifications" size={24} color="#4775f2" />
            </TitleIcons>
          </TitleBar>
          <HScrollViewLogo
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <LogoTag
              image={require("../assets/images/logo-framerx.png")}
              text="Framer X"
            />
            <LogoTag
              image={require("../assets/images/logo-figma.png")}
              text="Figma"
            />
          </HScrollViewLogo>
          <SubTitle>
            CONTINUE LEARNING <IconPlay />
          </SubTitle>
          <HScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card
              image={require("../assets/images/background2.jpg")}
              title="Styled compontents"
              logo={require("../assets/images/logo-react.png")}
              caption="React Native"
              subtitle="5 OF 12 SECTIONS"
            />
            <Card
              image={require("../assets/images/background2.jpg")}
              title="Styled compontents"
              logo={require("../assets/images/logo-react.png")}
              caption="React Native"
              subtitle="5 OF 12 SECTIONS"
            />
          </HScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const Container = styled.View`
  flex: 1;
  background: #f0f3f5;
`;

const TitleBar = styled.View`
  position: relative;
  flex-direction: row;
  padding: 30px 20px 0;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
`;

const TitleInfo = styled.View`
  padding-left: 20px;
`;

const TitleIcons = styled.View`
  position: absolute;
  right: 30px;
  top: 30px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const SubTitle = styled.Text`
  padding-left: 20px;
  font-size: 15px;
  color: #b8bece;
  font-weight: 600;
  text-transform: uppercase;
`;

const HScrollViewLogo = styled.ScrollView`
  padding: 20px;
  padding-left: 12px;
  height: 110px;
`;

const HScrollView = styled.ScrollView`
  height: 340px;
`;
