import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    row-gap: 16px;
    text-align: center;
  }
`;

export const Disclaimer = styled.div`
  color: #708797;
  margin-left: 18px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
`;
