import * as React from "react";
import styled from "styled-components";

import Button from "./Button";

function App() {
  return (
    <Wrapper>
      <Button>SEND</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  /* background: hsla(240, 50%, 15%, 1); */
`;

export default App;
