// import * as WebBrowser from 'expo-web-browser';
import React from "react";
import { ScrollView, SafeAreaView, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styled from "styled-components";
import Card from "../components/Card";
import IconPlay from "../components/Icons/iconPlay";
import LogoTag from "../components/LogoTag";

import Course from '../components/Course'

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
            {
              LogoTags.map((item,index)=>{
                return (<LogoTag
                  key={index}
                  image={item.image}
                  text={item.text}
                />)
              })
            }
            
          </HScrollViewLogo>
          <SubTitle>
            CONTINUE LEARNING <IconPlay />
          </SubTitle>
          <HScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              Cards.map((item,index)=>{
                return (<Card
                  key={index}
                  image={item.image}
                  title={item.title}
                  logo={item.logo}
                  caption={item.caption}
                  subtitle={item.subtitle}
                />)
              })
            }
            
          </HScrollView>
          <SubTitle>Popular Courses</SubTitle>
          {
            Courses.map((item,index)=>{
              return (
                <Course 
                  key={index}
                  avatar={item.avatar}
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  caption={item.caption}
                  logo={item.logo}
                  author={item.author}
                />
              )
            })
          }
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
  padding-left: 20px;
  height: 340px;
`;


const LogoTags = [
  {image: require('../assets/images/logo-framerx.png'),text: 'Framer X'},
  {image: require('../assets/images/logo-figma.png'),text: 'Figma'},
  {image: require('../assets/images/logo-studio.png'),text: 'Studio'},
  {image: require('../assets/images/logo-react.png'),text: 'React'},
  {image: require('../assets/images/logo-sketch.png'),text: 'Sketch'},
];

const Cards = [
  {
    title: 'React Native for Designer',
    image: require('../assets/images/background11.jpg'),
    subtitle: 'React Native',
    caption: '1 of 12 sections',
    logo: require('../assets/images/logo-react.png'),
  },
  {
    title: 'Styled Components',
    image: require('../assets/images/background12.jpg'),
    subtitle: 'React Native',
    caption: '2 of 12 sections',
    logo: require('../assets/images/logo-react.png'),
  },
  {
    title: 'Props and Icons',
    image: require('../assets/images/background13.jpg'),
    subtitle: 'React Native',
    caption: '3 of 12 sections',
    logo: require('../assets/images/logo-react.png'),
  },
  {
    title: 'State Data and Loop',
    image: require('../assets/images/background14.jpg'),
    subtitle: 'React Native',
    caption: '4 of 12 sections',
    logo: require('../assets/images/logo-react.png'),
  }
];

const Courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('../assets/images/background13.jpg'),
    logo: require('../assets/images/logo-studio.png'),
    author: 'Blue To',
    avatar: require('../assets/images/avatar.jpg'),
    caption: 'Design and interactive prototype',
  },
  {
    title: 'React for Desiginers',
    subtitle: '12 sections',
    image: require('../assets/images/background11.jpg'),
    logo: require('../assets/images/logo-react.png'),
    author: 'Blue To',
    avatar: require('../assets/images/avatar.jpg'),
    caption: 'Learn to desigin and code a React site',
  },
  {
    title: 'Design System in Figma',
    subtitle: '10 sections',
    image: require('../assets/images/background6.jpg'),
    logo: require('../assets/images/logo-figma.png'),
    author: 'Blue To',
    avatar: require('../assets/images/avatar.jpg'),
    caption: 'Complete guide to desigining a site using a collaborative design tool',
  },
]