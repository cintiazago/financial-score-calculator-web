import styled from "styled-components";

export const Container = styled.div`
  max-width: 544px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  position: static;
  left: 8px;
  top: 54px;
  background: #ffffff;
  margin: 24px 0px;

  box-shadow: 0px 2px 10px rgba(30, 42, 50, 0.08);
  border-radius: 8px;

  @media screen and (max-width: 600px) {
    margin: 24px 16px;
    align-items: center;
  }
`;
