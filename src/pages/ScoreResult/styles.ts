import styled from "styled-components";

export const Container = styled.main`
  margin: auto;
  margin-top: 124px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin-top: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  column-gap: 16px;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    row-gap: 16px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  row-gap: 24px;
  max-width: 544px;
  width: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Logo = styled.img`
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin-bottom: 28px;
  }
`;

export const TitleWrapper = styled.div`
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const CardTitle = styled.div`
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: #1e2a32;
`;

export const CardSubtitle = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #4d6475;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: auto;
`;

export const Button = styled.button`
  width: 320px;
  height: 56px;
  left: 0px;
  top: 0px;
  border: 2px solid #001c95;
  box-sizing: border-box;
  border-radius: 96px;
  background-color: #ffffff;

  margin: 32px 0px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: #001c95;
`;
