import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  margin-top: 124px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin-top: 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  margin-right: 16px;

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
  color: #708797;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
`;

export const Button = styled.button`
  width: 320px;
  height: 56px;
  left: 80px;
  top: 113px;

  background: #001c95;
  border-radius: 32px;
  border: none;

  margin: 32px 0px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
`;

export const Content = styled.div`
  display: flex;
  column-gap: 16px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    row-gap: 16px;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  width: 100%;
  column-gap: 16px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    row-gap: 16px;
  }
`;

export const Input = styled.div`
  label {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: #1e2a32;
  }

  input {
    width: 100%;
    background: #ffffff;
    border: 1px solid #e9eef2;
    box-sizing: border-box;
    border-radius: 4px;
    height: 56px;
    padding-left: 46px;
    padding-right: 16px;

    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    color: #4d6475;

    position: relative;

    background: transparent url("./src/assets/images/DolarIcon--medium.png")
      no-repeat 13px center;
  }

  p {
    color: red;
  }
`;
