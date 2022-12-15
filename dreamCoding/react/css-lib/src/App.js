import logo from "./logo.svg";
import "./App.css";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import styled, { css } from "styled-components";
import Tailwind from "./components/Tailwind";

const Continer = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 150px;
  height: 80px;
  background: yellow;
  ${(props) =>
    props.primary &&
    css`
      background: green;
    `};
`;

function App() {
  return (
    <>
      <Button1></Button1>
      <Button2></Button2>
      <Continer>
        <Button>버튼</Button>
        <Button primary>버튼</Button>
      </Continer>
      <Tailwind />
    </>
  );
}

export default App;
