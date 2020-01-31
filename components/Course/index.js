import React from 'react'
import styled from 'styled-components'

const Course = props =>{
  return (
    <Contanier>
      <Cover>
        <Image source={props.image}/>
        <Logo source={props.logo} ></Logo>
        <Subtitle>{props.subtitle}</Subtitle>
        <Title>{props.title}</Title>
      </Cover>
      <Content>
        <Avatar source={props.avatar}></Avatar>
        <Info>
          <Caption>{props.caption}</Caption>
          <Name>{props.author}</Name>
        </Info>
      </Content>
    </Contanier>
  )
}

export default Course

const Contanier = styled.View`
  height: 335px;
  background: white;
  margin: 10px 20px;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0,0,0,.15);
`;

const Cover = styled.View`
  position: relative;
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Logo = styled.Image`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -24px;
  margin-top: -24px;
  width: 48px;
  height: 48px;
`;

const Subtitle = styled.Text`
  position: absolute;
  left: 20px;
  bottom: 80px;
  font-size: 15px;
  color: rgba(255,255,255,.8);
  font-weight: 500;
`;

const Title = styled.Text`
  position: absolute;
  left: 20px;
  bottom: 20px;
  font-size: 24px;
  width: 170px;
  color: white;
  font-weight: 600;
`;

const Content = styled.View`
  height: 75px;
  flex-direction: row;
  padding: 0 20px;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

const Info = styled.View`
  padding-left: 20px;
`

const Caption = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #3c4560;
`;

const Name = styled.Text`
  margin-top: 2px;
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
`;
