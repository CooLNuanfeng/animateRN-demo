import React from 'react'
import styled from 'styled-components';

class CardComp extends React.PureComponent{
  render(){
    return (
      <CardWarp>
        <Card>
          <Image source={require('../../assets/images/pic1.jpg')} resizeMode="cover"></Image>
          <CardInfo>
            <CardTitle>Hello React Native</CardTitle>
            <CardText>React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces. </CardText>
          </CardInfo>
        </Card>
      </CardWarp>
    )
  }
}


const CardWarp = styled.View`
  box-shadow: 0 0 10px rgba(0,0,0,.5);
`

const Card = styled.View`
  width: 320px;
  flex-direction: column;
  background: #fff;
  overflow: hidden;
  border-radius: 10px;
`

const Image = styled.Image`
  width: 320px;
  height: 200px;
`

const CardInfo = styled.View`
  padding: 15px;
  display: flex;
  flex-direction: column;
  background: #fff;
`

const CardTitle = styled.Text`
  font-size: 26px;
  color: #333;
  font-weight: bold;
`

const CardText = styled.Text`
  font-size: 20px;
  color: #666;
`

export default CardComp