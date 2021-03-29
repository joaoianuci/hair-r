import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  & > p {
    font-family: "Rock Salt", sans-serif;
    font-weight: bold;
    font-size: 36px;
  }
  & > p:nth-child(2) {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.text.highlight};
  }
`
