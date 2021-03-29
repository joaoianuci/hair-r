import styled from "styled-components"

export const Container = styled.div`
  height: 425px;
  min-height: 425px;
  background: #e1faec;
  border-radius: 100%;
  border: solid  10px;
  border-color: ${(props) => props.theme.colors.secondary};
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  outline: 0;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  & > svg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 50px;
  }
`
