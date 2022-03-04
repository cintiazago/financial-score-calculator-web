import styled from "styled-components";

interface FillerProps {
  completed: number;
  bgcolor: string;
}

export const Container = styled.div`
  height: 24px;
  width: 100%;
  background-color: #e9eef2;
  border-radius: 24px;
`;

export const Filler = styled.div<FillerProps>`
  height: 100%;
  width: ${(props) => `${props.completed}%`};
  background-color: ${(props) => props.bgcolor};
  border-radius: inherit;
  text-align: right;
`;

export const Label = styled.span`
  padding: 5px;
  color: white;
  font-weight: bold;
`;
