import styled from "styled-components"

export const Container = styled.div`
  background-color: #e1faec;
  border-radius: 100%;
  border: solid 10px;
  border-color: ${(props) => props.theme.colors.secondary};
  height: 425px;
  min-height: 425px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  outline: 0;
  position: relative;

  @media (max-width: 475px) {
    min-height: calc(100vw - 25px);
    height: calc(100vw - 25px);
    width: calc(100% - 25px);
  }

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
