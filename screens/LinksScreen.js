import React from "react";
import styled from "styled-components";

import CardProduct from "../components/CardPruduct";

export default function LinksScreen() {
  return (
    <Contain>
      <CardProduct />
    </Contain>
  );
}

LinksScreen.navigationOptions = {
  title: "Links",
  header: null
};

const Contain = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
