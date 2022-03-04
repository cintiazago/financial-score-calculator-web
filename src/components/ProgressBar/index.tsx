import React from "react";
import { Container, Filler, Label } from "./styles";

type ProgressBarProps = {
  bgColor: string;
  completed: number;
  showPercentage: boolean;
};

const ProgressBar = (props: ProgressBarProps) => {
  const { bgColor, completed, showPercentage } = props;

  return (
    <Container>
      <Filler bgcolor={bgColor} completed={completed}>
        <Label>{showPercentage ? `${completed}%` : ""}</Label>
      </Filler>
    </Container>
  );
};

export default ProgressBar;
