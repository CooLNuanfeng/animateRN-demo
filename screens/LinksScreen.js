import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';

export default function LinksScreen() {
  return (
    <Contain>
      <Card/>
    </Contain>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
  header: null,
};

const Contain = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`